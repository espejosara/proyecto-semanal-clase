const weather = () => {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;

  const apiKey = 'e1875ec53bcd49aeae595251260105'; // Tu API Key real

  // Función que hace la llamada a la API
  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`);
      const data = await response.json();

      // Extraemos los datos que nos interesan
      const city = data.location.name;
      const temp = Math.round(data.current.temp_c); // Redondeamos la temperatura
      const icon = data.current.condition.icon;

      // Inyectamos el HTML en el widget
      widget.innerHTML = `
        <div class="weather-info">
          <img src="https:${icon}" alt="Icono del clima" class="weather-icon">
          <span class="weather-temp">${temp}ºC</span>
        </div>
        <span class="weather-city">${city}</span>
      `;
    } catch (error) {
      console.error("Error al obtener el clima:", error);
      widget.innerHTML = `<span style="font-size: 0.8rem; color: gray;">Clima no disponible</span>`;
    }
  };

  // Le pedimos la ubicación al navegador
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => fetchWeather(position.coords.latitude, position.coords.longitude), // Si acepta
      () => fetchWeather('Madrid') // Plan B: si rechaza o falla, mostramos Madrid por defecto
    );
  }
};

export default weather;