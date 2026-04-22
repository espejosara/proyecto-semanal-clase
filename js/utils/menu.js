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
    link.addEventListener('click', (e) => {
      // Si el enlace es el menú desplegable, lo abrimos y no cerramos el menú general
      if (link.id === 'cheatsheets-toggle') {
        e.preventDefault(); // Evita que la página salte hacia arriba
        link.parentElement.classList.toggle('active');
        return;
      }

      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      /* Libera el scroll al hacer clic en un enlace */
      document.body.style.overflow = '';
    });
  });
};

export default menu;
