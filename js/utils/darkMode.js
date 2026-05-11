const darkMode = () => {
  const button = document.getElementById('dark-mode-toggle');
  const body = document.body;
  if (!button) return;

  // 1. FUNCIÓN QUE APLICA EL CAMBIO Y GUARDA
  const aplicarModo = (activar) => {
    body.classList.toggle("dark-mode", activar);
    
    button.innerHTML = `<i data-lucide="${activar ? 'sun' : 'moon'}"></i>`;
    if (window.lucide) lucide.createIcons();

    localStorage.setItem("theme", activar);
  };

  // 2. FUNCIÓN QUE CARGA LO QUE HABÍA GUARDADO AL ABRIR LA WEB
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

  // 3. EVENTO CLICK
  button.addEventListener("click", () => {
    const estaActivo = body.classList.contains("dark-mode");
    aplicarModo(!estaActivo);
  });
};

export default darkMode;