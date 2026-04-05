import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import menu from './utils/menu.js';
import skillsList from './utils/skillsList.js';

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;
document.getElementById('footer').classList.add('site-footer');

skillsList();
darkMode();
menu();

if (window.lucide) {
  lucide.createIcons();
}