const darkMode = () => {
  const button = document.getElementById('dark-mode-toggle');
  const body = document.body;
  if (!button) return;

  // 1. FUNCIÓN QUE APLICA EL CAMBIO Y GUARDA
  const aplicarModo = (activar) => {
    // Ponemos o quitamos la clase al body
    body.classList.toggle("dark-mode", activar);
    
    // Cambiamos el icono del botón (usando tu lógica de Lucide)
    button.innerHTML = `<i data-lucide="${activar ? 'sun' : 'moon'}"></i>`;
    if (window.lucide) lucide.createIcons();

    // GUARDAMOS en el "bloc de notas" del navegador
    localStorage.setItem("theme", activar);
  };

  // 2. FUNCIÓN QUE CARGA LO QUE HABÍA GUARDADO AL ABRIR LA WEB
  const cargarPreferencia = () => {
    const guardado = localStorage.getItem("theme");

    // Si nunca ha entrado, miramos la preferencia de su Windows/Mac
    if (guardado === null) {
        const prefiereDarkSistema = window.matchMedia('(prefers-color-scheme: dark)').matches;
        aplicarModo(prefiereDarkSistema);
    } else {
        // Si ya había entrado, convertimos el texto "true" en un valor real true
        aplicarModo(guardado === "true");
    }
  };

  // Ejecutamos al cargar
  cargarPreferencia();

  // 3. EVENTO CLICK
  button.addEventListener("click", () => {
    const estaActivo = body.classList.contains("dark-mode");
    // Si está activo, le pasamos false (para desactivar). Si no, true.
    aplicarModo(!estaActivo);
  });
};

export default darkMode;