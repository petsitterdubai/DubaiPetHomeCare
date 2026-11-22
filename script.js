// Dubai Pet Home Care — mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.getElementById('site-nav');

navToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.querySelector('i').className = open ? 'fas fa-times' : 'fas fa-bars';
});

// Services dropdown: hover on desktop, tap-to-expand on mobile
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', e => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      toggle.parentElement.classList.toggle('open');
    }
  });
});