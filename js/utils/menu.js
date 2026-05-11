const menu = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('#nav-links a');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    const isActive = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isActive);
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (link.id === 'cheatsheets-toggle') {
        e.preventDefault(); 
        link.parentElement.classList.toggle('active');
        return;
      }

      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = navLinks.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (navLinks.classList.contains('active') && !isClickInsideMenu && !isClickOnHamburger) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
};

export default menu;
