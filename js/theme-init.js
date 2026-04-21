const temaGuardado = localStorage.getItem('theme');
const prefiereOscuro = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (temaGuardado === 'true' || (temaGuardado === null && prefiereOscuro)) {
  document.body.classList.add('dark-mode');
}