const weather = () => {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;

  const apiKey = 'e1875ec53bcd49aeae595251260105';

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`);
      const data = await response.json();

      const city = data.location.name;
      const icon = data.current.condition.icon;
      const temp = Math.round(data.current.temp_c);

      widget.innerHTML = `
        <div class="weather-info">
          <img src="https:${icon}" alt="Icono del clima" class="weather-icon">
          <span class="weather-temp">${temp}ºC</span>
        </div>
        <span class="weather-city">${city}</span>
      `;
    } catch (error) {
      console.error("Error al obtener el clima:", error);
      widget.innerHTML = `<span class="weather-error">Clima no disponible</span>`;
    }
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => fetchWeather(position.coords.latitude, position.coords.longitude),
      () => fetchWeather('Madrid')
    );
  }
};

export default weather;