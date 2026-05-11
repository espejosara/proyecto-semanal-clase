import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import menu from './utils/menu.js';
import skillsList from './utils/skillsList.js';
import cheatsheetsList from './utils/cheatsheetsList.js';
import resourcesGenerator from './utils/resourcesGenerator.js';
import weather from './utils/weather.js';

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
weather();

if (window.lucide) {
  lucide.createIcons();
}