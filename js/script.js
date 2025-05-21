// Hamburger functionality
document.addEventListener('DOMContentLoaded', function() {
  // Top nav hamburger
  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });

  // Side nav hamburger
  document.querySelector('.side-hamburger').addEventListener('click', function() {
    document.querySelector('.side-nav ul').classList.toggle('active');
  });
});