

export const header = `
  <nav class="nav-container">
    
    <!-- LOGO -->
    <a class="logo" href="index.html"><strong>SE</strong></a>

    <!-- HAMBURGUESA -->
    <div class="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- NAV -->
    <ul class="nav-list" id="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#cheatsheets">Cheatsheets</a></li>
      <li><a href="#recursos">Recursos</a></li>
      <li><a href="contacto.html">Contacto</a></li>

      <!-- DARK MODE -->
      <li>
        <button id="dark-mode-toggle" class="dark-mode-btn">
          <i data-lucide="moon"></i>
        </button>
      </li>
    </ul>

  </nav>
`;

export const footer = `
  <div class="footer-content">
    <nav class="footer-nav">
      <a href="about.html">About</a>
      <a href="#skills">Skills</a>
      <a href="#cheatsheets">Cheatsheets</a>
      <a href="#recursos">Recursos</a>
      <a href="contacto.html">Contacto</a>
    </nav>

    <p>&copy; 2026 Sara Espejo</p>
    <p>Hecho con <span class="heart">♥</span> y muchas ganas de aprender</p>
  </div>
`;