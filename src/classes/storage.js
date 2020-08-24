const storage = (() => {
  const getCities = () => JSON.parse(localStorage.getItem('cities') || '[]');

  const addCity = (city) => {
    const cities = JSON.parse(localStorage.getItem('cities') || '[]');
    const indexCity = cities.indexOf(city);
    if (indexCity >= 0) {
      cities.splice(indexCity, 1);
    }
    cities.unshift(city);
    localStorage.setItem('cities', JSON.stringify(cities));
  };

  return { addCity, getCities };
})();

export default storage;