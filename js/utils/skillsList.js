import skills from '../data/skills.js';

const skillsList = () => {
  const container = document.getElementById('skills-list');

  if (!container) return;

  const dominatedSkills = skills.filter((skill) => skill.state === 'dominada');

  container.innerHTML = dominatedSkills
    .map((skill) => `
      <article class="skill-card">
        <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
        <h3>${skill.name}</h3>
        <p><strong>Nivel:</strong> ${skill.level}</p>
        <p>${skill.description}</p>
        <div class="skill-tags">
          ${skill.tags.map((tag) => `<span>${tag}</span>`).join('')}
        </div>
      </article>
    `)
    .join('');
};

export default skillsList;