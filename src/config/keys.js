const keys = (() => {
  const getOpenWeatherKey = () => 'OPEN_WEATHER_API_KEY';
  const getUnsplashKey = () => 'UNSPLASH_API_KEY';

  return {
    getOpenWeatherKey, getUnsplashKey,
  };
})();

export default keys;