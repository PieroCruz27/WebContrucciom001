// Header scroll effect
const header = document.getElementById('header');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

// Update active nav item based on scroll position
function updateActiveNavLink() {
  const scrollPosition = window.scrollY;
  
  // Add scrolled class to header when scrolled down
  if (scrollPosition > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Update active nav link based on current section
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');

function toggleMobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

// Close mobile menu when clicking a nav link
function closeMobileMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

// Event listeners
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('load', updateActiveNavLink);
hamburger.addEventListener('click', toggleMobileMenu);

// Close menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});