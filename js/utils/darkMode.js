const darkMode = () => {
  const button = document.getElementById('dark-mode-toggle');
  if (!button) return;

  const icon = button.querySelector('i[data-lucide]');

  const savePref = (isDark) => {
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
  };

  const setIcon = (isDark) => {
    if (!icon) return;
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
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