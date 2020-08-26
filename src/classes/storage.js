const storage = (() => {
  const getCities = () => JSON.parse(localStorage.getItem('cities') || '[]');

  const clearCities = () => localStorage.removeItem('cities');

  const addCity = (country, city) => {
    const cities = JSON.parse(localStorage.getItem('cities') || '[]');

    const indexCity = cities.indexOf(city);

    if (indexCity >= 0) {
      cities.splice(indexCity, 1);
    }
    cities.unshift({ country: `${country}`, name: `${city}` });
    localStorage.setItem('cities', JSON.stringify(cities));
  };

  return { addCity, getCities, clearCities };
})();

export default storage;