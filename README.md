# ¡Hola! Soy Sara Espejo 

Bienvenid@ a mi portfolio personal. Soy graduada en Filología Inglesa y, tras trabajar como profesora, traductora y administrativa, descubrí mi verdadera pasión por la tecnología. Actualmente me estoy formando como **Junior Full Stack Developer**, y este proyecto es el reflejo de mi aprendizaje continuo.

Este portfolio ha sido creado completamente desde cero, sin utilizar frameworks ni librerías externas complejas, con el objetivo de afianzar mis bases en el desarrollo web frontend.

---

##  ¿Qué incluye este proyecto?

A lo largo de varias semanas de trabajo (sprints), he ido iterando y escalando este proyecto hasta convertirlo en una web completa, interactiva y accesible. Estas son sus características principales:

   **Estructura Multi-página:** Navegación completa entre la página principal (Home), sección personal (About), Recursos, Cheatsheets y Contacto.
   **Sección 'Sobre mí':** Página dedicada con mi biografía, experiencia, educación y valores, acompañada de un diseño interactivo tipo tarjeta Polaroid.
   **Portfolio de Proyectos:** Escaparate de mis desarrollos reales (como este portfolio o mi Dashboard interactivo) con enlaces a código fuente y demos.
   **Cheatsheets interactivos:** Guías rápidas de HTML, CSS y JS con bloques de código estilizados, barra de desplazamiento personalizada y un menú de navegación pegajoso (*sticky*).
   **Directorio de Recursos (Tabs):** Listado de herramientas, documentación y blogs categorizados mediante un sistema de pestañas dinámico programado en JavaScript.
   **Diseño 100% Responsive:** Completamente adaptado a móviles y tablets, incluyendo un menú lateral que se desliza de forma nativa.
   **Modo Oscuro (Dark Mode):** Implementado con CSS Variables y JavaScript, detectando la preferencia del sistema operativo y guardando la elección del usuario en `localStorage`.
   **Widget del Clima en tiempo real:** Integración con **WeatherAPI** y la `Geolocation API` del navegador para mostrar la temperatura local en el menú superior.
   **Formulario de Contacto Real:** Conectado con **FormSubmit** para enviar correos reales a mi bandeja de entrada sin necesidad de programar un servidor backend.
   **Renderizado Dinámico de Datos:** Toda la información (skills, recursos, cheatsheets) extraída de archivos de datos (`.js`) e inyectada en el DOM, manteniendo el HTML limpio.
   **Accesibilidad Web (a11y):** Uso estricto de HTML semántico, atributos `aria-expanded` para lectores de pantalla, estados de foco (`:focus-visible`) para navegación por teclado y respeto a la configuración de movimiento reducido (`prefers-reduced-motion`).

---

##  Tecnologías utilizadas

   **HTML5:** Estructura semántica y accesible.
   **CSS3:** Flexbox, CSS Grid, animaciones (`@keyframes`), Custom Properties (variables) y metodologías de código limpio.
   **JavaScript (Vanilla ES6+):** Manipulación del DOM, promesas (`async/await`), peticiones HTTP (`fetch`), funciones flecha y desestructuración. Arquitectura modular importando/exportando utilidades.
   **Lucide Icons:** Para la iconografía vectorial.

---

##  Estructura del proyecto

He puesto un gran esfuerzo en mantener una arquitectura de archivos profesional y escalable:

```text
📁 css/          # Hojas de estilo estructuradas y modulares
📁 js/
 ├── 📁 data/    # Archivos de datos puros (skills, recursos...)
 ├── 📁 templates/ # Plantillas HTML renderizadas desde JS (Header, Footer)
 ├── 📁 utils/   # Lógica separada por funcionalidades (clima, menú, temas)
 └── main.js     # Punto de entrada principal
📄 index.html    # Home y secciones principales
📄 about.html    # Página sobre mí
📄 contacto.html # Formulario de contacto
```


Gracias por pasarte por mi repositorio. ¡Hecho con ♥ y muchas ganas de aprender!
Siéntete libre de conectar conmigo en LinkedIn.