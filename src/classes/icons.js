const icons = (() => {
  const getFlagCountry = (country) => `https://www.countryflags.io/${country}/flat/32.png`;

  const getWeather = (weather) => `http://openweathermap.org/img/w/${weather}.png`;

  return {
    getFlagCountry, getWeather,
  };
})();

export default icons;