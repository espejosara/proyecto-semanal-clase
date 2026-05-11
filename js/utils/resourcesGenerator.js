import resources from '../data/resources.js';

const resourcesGenerator = () => {
  const container = document.getElementById('recursos-container');
  if (!container) return;

  // Generar navegación de tabs
  const tabsHTML = `
    <div class="tabs-nav">
      ${resources.map((category, index) => `
        <button class="tab-btn ${index === 0 ? 'active' : ''}" data-category="${index}">
          ${category.category}
        </button>
      `).join('')}
    </div>
  `;

  // Generar contenido de cada panel
  const tabsContentHTML = `
    <div class="tabs-content">
      ${resources.map((category, index) => `
        <div class="tab-pane ${index === 0 ? 'active' : ''}" data-panel="${index}">
          <ul class="resources-list">
            ${category.items.map(item => `
              <li>
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="resource-title">${item.title}</a>
                <p class="resource-note">${item.note}</p>
              </li>
            `).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;

  // Insertar en el DOM
  container.innerHTML = tabsHTML + tabsContentHTML;

  const tabButtons = container.querySelectorAll('.tab-btn');
  const tabPanels = container.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const categoryIndex = button.dataset.category;

      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      button.classList.add('active');
      container.querySelector(`[data-panel="${categoryIndex}"]`).classList.add('active');
    });
  });
};

export default resourcesGenerator;