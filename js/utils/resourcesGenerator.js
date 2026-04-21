import resources from '../data/resources.js';

const resourcesGenerator = () => {
  const container = document.getElementById('recursos-container');
  if (!container) return;

  const tabsNav = document.createElement('div');
  tabsNav.className = 'tabs-nav';

  const tabsContent = document.createElement('div');
  tabsContent.className = 'tabs-content';

  resources.forEach((resourceData, index) => {
    // 1. Crear el botón de la pestaña
    const tabBtn = document.createElement('button');
    tabBtn.className = `tab-btn ${index === 0 ? 'active' : ''}`; // El 1º activo por defecto
    tabBtn.textContent = resourceData.category;
    tabsNav.appendChild(tabBtn);

    // 2. Crear el panel correspondiente
    const tabPane = document.createElement('div');
    tabPane.className = `tab-pane ${index === 0 ? 'active' : ''}`;

    const list = document.createElement('ul');
    list.className = 'resources-list';
    
    resourceData.items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="resource-title">${item.title}</a>
        <p class="resource-note">${item.note}</p>
      `;
      list.appendChild(li);
    });

    tabPane.appendChild(list);
    tabsContent.appendChild(tabPane);

    // 3. Evento click para cambiar de tab
    tabBtn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
      tabBtn.classList.add('active');
      tabPane.classList.add('active');
    });
  });

  container.appendChild(tabsNav);
  container.appendChild(tabsContent);
};

export default resourcesGenerator;