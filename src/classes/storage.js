const storage = (() => {
  const getCities = () => JSON.parse(localStorage.getItem('cities') || '[]');

  const addCity = (city) => {
    const cities = JSON.parse(localStorage.getItem('cities') || '[]');
    cities.push(city);
    localStorage.setItem('cities', JSON.stringify(cities));
  };

  const removeCity = (city) => {
    const cities = this.getCities();
    cities.
      .localStorage.setItem('cities', JSON.stringify(cities));
  };


  return { addCity };
})();

export default storage;