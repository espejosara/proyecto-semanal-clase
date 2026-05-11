import cheatsheets from '../data/cheatsheets.js';

const cheatsheetsList = () => {
  const container = document.getElementById('cheatsheets');
  if (!container) return;

  const listContainer = document.createElement('div');
  listContainer.className = 'cards-grid'; 

  cheatsheets.forEach(sheet => {
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