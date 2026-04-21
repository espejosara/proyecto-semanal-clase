import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import menu from './utils/menu.js';
import skillsList from './utils/skillsList.js';
import cheatsheetsList from './utils/cheatsheetsList.js';
import resourcesGenerator from './utils/resourcesGenerator.js';

const headerContainer = document.getElementById('header');
const footerContainer = document.getElementById('footer');

if (headerContainer) {
  headerContainer.innerHTML = header;
  
  // Resaltar el enlace de la página activa
  const activePath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === `./${activePath}`) {
      link.classList.add('active');
    }
  });
}

if (footerContainer) {
  footerContainer.innerHTML = footer;
  footerContainer.classList.add('site-footer');
}

skillsList();
cheatsheetsList();
resourcesGenerator();
darkMode();
menu();

if (window.lucide) {
  lucide.createIcons();
}

// Simulación de envío del formulario de contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const btn = contactForm.querySelector('.btn-submit');
    const originalText = btn.textContent;
    
    btn.textContent = '¡Mensaje Enviado!';
    contactForm.reset(); // Vacía los inputs del formulario
    
    setTimeout(() => { btn.textContent = originalText; }, 3000); // Vuelve a la normalidad a los 3s
  });
}