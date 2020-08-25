import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import NewMap from '../rendering/newmap';
import Storage from '../classes/storage';
import Weather from '../classes/weather';
import Sidebar from './sidebar';

const form = (() => {
  const infoWeatherElementID = 'weather-info';
  const mapWeatherElementID = 'weather-map';
  let formElement;

  const showWeatherInfo = (weatherinfo) => {
    const map = formElement.querySelector(`div[id='${mapWeatherElementID}']`);
    map.innerHTML = '';
    map.appendChild(
      NewMap({ latitude: weatherinfo.data.coord.lat, longitude: weatherinfo.data.coord.lon }),
    );
  };

  const create = () => {
    const buttonRequest = NewElement({
      tag: 'button', classes: 'btn btn-primary', html: 'Request', attributes: { type: 'button' },
    });

    const inputRequest = NewElement({
      tag: 'input', attributes: { type: 'text', id: 'cityname', autocomplete: 'off' }, classes: 'form-control',
    });

    buttonRequest.addEventListener('click', async () => {
      const city = formElement.querySelector("input[class='form-control']");
      const weather = new Weather({
        reqCity: city.value,
      });

      if (city.value.length > 0) {
        const newRequest = await weather.request();
        if (newRequest.result === 1) {
          Storage.addCity(city.value);
          Sidebar.loadCitiesNodes(Storage.getCities());
          city.value = '';
          showWeatherInfo(newRequest);
        }
      }
    });

    inputRequest.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        buttonRequest.click();
        e.preventDefault();
      }
    });

    formElement = ElementsList(
      {
        container: NewElement({ tag: 'div', classes: 'row justify-content-center' }),
        childs: [
          ElementsList(
            {
              container: NewElement({ tag: 'div', classes: 'col-12 col-lg-6' }),
              childs: [
                ElementsList({
                  container: NewElement({ tag: 'form' }),
                  childs: [
                    ElementsList({
                      container: NewElement({ tag: 'div', classes: 'form-group' }),
                      childs: [
                        NewElement({ tag: 'label', attributes: { for: 'cityname' }, html: 'City name:' }),
                        inputRequest,
                      ],
                    }),
                    buttonRequest,
                  ],
                }),
              ],
            },
          ),
          NewElement({ tag: 'div', classes: 'col-12 col-lg-6 mt-2 mt-lg-0', attributes: { id: `${infoWeatherElementID}` } }),
          NewElement({ tag: 'div', classes: 'col-12 col-lg-6 mt-2 mt-lg-0', attributes: { id: `${mapWeatherElementID}` } }),
        ],
      },
    );

    return formElement;
  };

  const get = () => formElement;

  return { create, get };
})();

export default form;