export const header = `
  <nav class="nav-container">
    <a class="logo" href="./index.html"><strong>SE</strong></a>

    <button class="hamburger" id="hamburger" aria-expanded="false" aria-label="Abrir menú">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <ul class="nav-list" id="nav-links">
      <li><a href="./index.html">Home</a></li>
      <li><a href="./about.html">About</a></li>
      <li><a href="./index.html#skills">Skills</a></li>
      <li class="dropdown">
        <a href="#" id="cheatsheets-toggle" class="nav-dropdown-toggle">Cheatsheets <i data-lucide="chevron-down"></i></a>
        <ul class="dropdown-menu">
          <li><a href="./cheatsheet-html.html">HTML5</a></li>
          <li><a href="./cheatsheet-css.html">CSS3</a></li>
          <li><a href="./cheatsheet-js.html">JavaScript</a></li>
        </ul>
      </li>
      <li><a href="./recursos.html">Recursos</a></li>
      <li><a href="./contacto.html">Contacto</a></li>
    </ul>

    <div id="weather-widget" class="weather-widget"></div>

    <button id="dark-mode-toggle" class="dark-mode-btn" aria-label="Cambiar tema">
      <i data-lucide="moon"></i>
    </button>
  </nav>
`;

export const footer = `
  <div class="footer-content">
    <nav class="footer-nav">
      <a href="./index.html">Home</a>
      <a href="./about.html">About</a>
      <a href="./index.html#skills">Skills</a>
      <a href="./index.html#cheatsheets">Cheatsheets</a>
      <a href="./recursos.html">Recursos</a>
      <a href="./contacto.html">Contacto</a>
    </nav>

    <p>&copy; 2026 Sara Espejo</p>
    <p>Hecho con <span class="heart">♥</span> y muchas ganas de aprender</p>
  </div>
`;