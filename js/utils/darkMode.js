const darkMode = () => {
  const button = document.getElementById('dark-mode-toggle');
  if (!button) return;

  const savePref = (isDark) => {
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
  };

  const setIcon = (isDark) => {
    // Reinyectamos la etiqueta en el botón para evitar perderla cuando Lucide la convierte en SVG
    button.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}"></i>`;
    if (window.lucide) lucide.createIcons();
  };

  const applyMode = (isDark) => {
    if (isDark) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
    setIcon(isDark);
  };

  // initial preference: localStorage -> prefers-color-scheme -> default light
  let stored;
  try { stored = localStorage.getItem('theme'); } catch (e) { stored = null; }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialDark = stored ? stored === 'dark' : prefersDark;

  applyMode(initialDark);

  button.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    savePref(isDark);
    setIcon(isDark);
  });
};

export default darkMode;