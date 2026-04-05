import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import menu from './utils/menu.js';
import skillsList from './utils/skillsList.js';

const headerContainer = document.getElementById('header');
const footerContainer = document.getElementById('footer');

if (headerContainer) {
  headerContainer.innerHTML = header;
}

if (footerContainer) {
  footerContainer.innerHTML = footer;
  footerContainer.classList.add('site-footer');
}

skillsList();
darkMode();
menu();

if (window.lucide) {
  lucide.createIcons();
}