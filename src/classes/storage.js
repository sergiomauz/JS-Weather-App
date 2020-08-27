const storage = (() => {
  const getCities = () => JSON.parse(localStorage.getItem('cities') || '[]');

  const clearCities = () => localStorage.removeItem('cities');

  const getLastCity = () => {
    const CITIES = getCities();
    if (CITIES.length > 0) {
      return `${CITIES[0].name}, ${CITIES[0].country}`;
    }
    return '';
  };

  const addCity = (country, city) => {
    const CITIES = JSON.parse(localStorage.getItem('cities') || '[]');
    const INDEX_CITY = (CITIES.map((c) => (`${c.name}|${c.country}`))).indexOf(`${city}|${country}`);

    if (INDEX_CITY >= 0) {
      CITIES.splice(INDEX_CITY, 1);
    }
    CITIES.unshift({ country, name: city });
    localStorage.setItem('cities', JSON.stringify(CITIES));
  };

  return {
    addCity, getCities, clearCities, getLastCity,
  };
})();

export default storage;