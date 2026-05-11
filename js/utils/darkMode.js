const darkMode = () => {
  const button = document.getElementById('dark-mode-toggle');
  const body = document.body;
  if (!button) return;

  // Aplica el cambio de tema y lo guarda en localStorage
  const aplicarModo = (activar) => {
    body.classList.toggle("dark-mode", activar);
    
    button.innerHTML = `<i data-lucide="${activar ? 'sun' : 'moon'}"></i>`;
    if (window.lucide) lucide.createIcons();

    localStorage.setItem("theme", activar);
  };

  // Carga la preferencia guardada o la del sistema
  const cargarPreferencia = () => {
    const guardado = localStorage.getItem("theme");


    if (guardado === null) {
        const prefiereDarkSistema = window.matchMedia('(prefers-color-scheme: dark)').matches;
        aplicarModo(prefiereDarkSistema);
    } else {
        aplicarModo(guardado === "true");
    }
  };

  cargarPreferencia();

  button.addEventListener("click", () => {
    const estaActivo = body.classList.contains("dark-mode");
    aplicarModo(!estaActivo);
  });
};

export default darkMode;