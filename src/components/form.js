import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import NewMap from '../rendering/newmap';
import Storage from '../classes/storage';
import Weather from '../classes/weather';
import Sidebar from './sidebar';

const getFlagIcon = ((country) => `https://www.countryflags.io/${country}/flat/32.png`);
const getWeatherIcon = ((weather) => `http://openweathermap.org/img/w/${weather}.png`);

const form = (() => {
  let formElement;

  const infoWeatherElementID = 'weather-info';
  const mapWeatherElementID = 'weather-map';
  const inputCityNameID = 'cityname';
  const divErrorID = 'error-message';

  const clearWeatherInfo = () => {
    const map = formElement.querySelector(`div[id='${mapWeatherElementID}']`);
    const info = formElement.querySelector(`div[id='${infoWeatherElementID}']`);
    const errorMessage = formElement.querySelector(`div[id='${divErrorID}']`);
    info.innerHTML = '';
    map.innerHTML = '';
    errorMessage.classList.add('d-none');
  };

  const showErrorRequest = (errorType) => {
    const divError = formElement.querySelector(`div[id='${divErrorID}']`);
    divError.innerHTML = '';
    if (errorType === 0) {
      divError.className = 'alert alert-warning';
      divError.innerHTML = 'City not found!.';
    } else {
      divError.className = 'alert alert-danger';
      divError.innerHTML = 'You must set a valid API Key.';
    }
  };

  const showWeatherInfo = (weatherinfo) => {
    const map = formElement.querySelector(`div[id='${mapWeatherElementID}']`);
    const info = formElement.querySelector(`div[id='${infoWeatherElementID}']`);

    map.appendChild(
      NewMap(
        {
          latitude: weatherinfo.data.coordinates.latitude,
          longitude: weatherinfo.data.coordinates.longitude,
        },
      ),
    );

    info.appendChild(
      ElementsList(
        {
          container: NewElement({ tag: 'div', classes: 'form-group' }),
          childs: [
            NewElement({
              tag: 'label', classes: 'font-weight-bold', attributes: { for: 'spanCity' }, html: 'City:',
            }),
            ElementsList(
              {
                container: NewElement({ tag: 'div', classes: 'form-control border-0', attributes: { id: 'spanCity' } }),
                childs: [
                  NewElement({ tag: 'img', attributes: { src: getFlagIcon(`${weatherinfo.data.country}`), style: 'margin-top:-5px;' } }),
                  NewElement({ tag: 'span', classes: 'ml-2', html: `${weatherinfo.data.city}` }),
                ],
              },
            ),
          ],
        },
      ),
    );
    info.appendChild(
      ElementsList(
        {
          container: NewElement({ tag: 'div', classes: 'form-group' }),
          childs: [
            NewElement({
              tag: 'label', classes: 'font-weight-bold', attributes: { for: 'spanWeather' }, html: 'Weather:',
            }),
            ElementsList(
              {
                container: NewElement({ tag: 'div', classes: 'form-control border-0', attributes: { id: 'spanWeather' } }),
                childs: [
                  NewElement({ tag: 'img', attributes: { src: getWeatherIcon(`${weatherinfo.data.icon}`), style: 'margin-top:-8px;margin-left:-5px;width:40px;height:40px;' } }),
                  NewElement({ tag: 'span', classes: 'ml-2', html: `${weatherinfo.data.description}` }),
                ],
              },
            ),
          ],
        },
      ),
    );
    info.appendChild(
      ElementsList(
        {
          container: NewElement({ tag: 'div', classes: 'form-group' }),
          childs: [
            NewElement({
              tag: 'label', classes: 'font-weight-bold', attributes: { for: 'spanTemps' }, html: 'Temperature:',
            }),
            ElementsList(
              {
                container: NewElement({ tag: 'ul', attributes: { id: 'spanTemps' } }),
                childs: [
                  NewElement({ tag: 'li', html: `Current: ${weatherinfo.data.main.temp}` }),
                  NewElement({ tag: 'li', html: `Sensation: ${weatherinfo.data.main.feels_like}` }),
                  NewElement({ tag: 'li', html: `Minimum: ${weatherinfo.data.main.temp_min}` }),
                  NewElement({ tag: 'li', html: `Maximum: ${weatherinfo.data.main.temp_max}` }),
                ],
              },
            ),
          ],
        },
      ),
    );
  };

  const create = () => {
    const buttonRequest = NewElement({
      tag: 'button', classes: 'btn btn-primary mt-2 mt-sm-0 ml-0 ml-sm-2', html: 'Request', attributes: { type: 'button' },
    });

    const inputRequest = NewElement({
      tag: 'input', attributes: { type: 'text', id: `${inputCityNameID}`, autocomplete: 'off' }, classes: 'form-control ml-0 ml-sm-2',
    });

    const divError = NewElement({
      tag: 'div', classes: 'd-none', attributes: { id: `${divErrorID}` }, html: 'Search:',
    });

    buttonRequest.addEventListener('click', async () => {
      const city = formElement.querySelector("input[class='form-control ml-0 ml-sm-2']");
      const weather = new Weather({
        reqCity: city.value,
      });

      if (city.value.length > 0) {
        const newRequest = await weather.request();
        clearWeatherInfo();
        if (newRequest.result === 1) {
          Storage.addCity(city.value);
          Sidebar.loadCitiesNodes(Storage.getCities());
          city.value = '';
          showWeatherInfo(newRequest);
        } else {
          showErrorRequest(newRequest.result);
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
        container: NewElement({ tag: 'div', classes: 'd-flex flex-column' }),
        childs: [
          ElementsList(
            {
              container: NewElement({ tag: 'div', classes: 'row justify-content-center' }),
              childs: [
                ElementsList(
                  {
                    container: NewElement({ tag: 'div', classes: 'col-12' }),
                    childs: [
                      ElementsList({
                        container: NewElement({ tag: 'div', classes: 'form-inline pb-3 border-bottom justify-content-center' }),
                        childs: [
                          NewElement({ tag: 'label', attributes: { for: `${inputCityNameID}` }, html: 'Search:' }),
                          inputRequest,
                          buttonRequest,
                        ],
                      }),
                      ElementsList({
                        container: NewElement({ tag: 'div', classes: 'form-inline mt-2 justify-content-center' }),
                        childs: [
                          divError,
                        ],
                      }),
                    ],
                  },
                ),
              ],
            },
          ),
          ElementsList(
            {
              container: NewElement({ tag: 'div', classes: 'row justify-content-center mt-3' }),
              childs: [
                NewElement({ tag: 'div', classes: 'col-12 col-lg-6 mt-2 mt-lg-0', attributes: { id: `${mapWeatherElementID}` } }),
                NewElement({ tag: 'div', classes: 'col-12 col-lg-6 mt-2 mt-lg-0', attributes: { id: `${infoWeatherElementID}` } }),
              ],
            },
          ),
        ],
      },
    );

    return formElement;
  };

  const get = () => formElement;

  return { create, get };
})();

export default form;