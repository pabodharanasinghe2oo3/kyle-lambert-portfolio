// Add to your script.js file
document.addEventListener('DOMContentLoaded', function() {
  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.about-content, .gallery-item, .process-step');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  const initAnimations = () => {
    const elements = document.querySelectorAll('.about-content, .gallery-item, .process-step');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
    });
    
    // Hero text animation
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    heroContent.style.transition = 'all 0.8s ease-out';
    
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 300);
  };

  // Initialize and set up scroll listener
  initAnimations();
  window.addEventListener('scroll', animateOnScroll);
  
  // Current year for footer
  document.getElementById('year').textContent = new Date().getFullYear();
});