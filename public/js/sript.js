// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Load animation for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Set opacity to 0 initially
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
    
    // When image loads, fade it in
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    // If image is already loaded from cache
    if (img.complete) {
      img.style.opacity = '1';
    }
  });
});

// Initialize the year in footer copyright
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.querySelector('.footer-bottom p');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = yearElement.textContent.replace('2025', currentYear);
  }
});