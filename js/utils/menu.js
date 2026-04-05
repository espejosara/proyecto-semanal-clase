// js/utils/menu.js

const menu = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('#nav-links a');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    /* Bloquea el scroll del fondo cuando el menú está abierto */
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      /* Libera el scroll al hacer clic en un enlace */
      document.body.style.overflow = '';
    });
  });
};

export default menu;
