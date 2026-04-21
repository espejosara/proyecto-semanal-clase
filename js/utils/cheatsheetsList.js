import cheatsheets from '../data/cheatsheets.js';

const cheatsheetsList = () => {
  const container = document.getElementById('cheatsheets');
  if (!container) return;

  // Reutilizamos el estilo del grid de skills
  const listContainer = document.createElement('div');
  listContainer.id = 'skills-list'; 

  cheatsheets.forEach(sheet => {
    // Toda la tarjeta es un enlace <a> para ser clickable, como pedía el ejercicio
    const card = document.createElement('a');
    card.href = sheet.link;
    card.className = 'skill-card'; 
    card.innerHTML = `
      <img src="${sheet.icon}" alt="Icono de ${sheet.name}" class="skill-icon">
      <h3>${sheet.name}</h3>
      <p>Ver guía rápida</p>
    `;
    listContainer.appendChild(card);
  });

  container.appendChild(listContainer);
};

export default cheatsheetsList;