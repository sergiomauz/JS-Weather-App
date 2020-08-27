import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import NewMap from '../rendering/newmap';
import Storage from '../classes/storage';
import Weather from '../classes/weather';
import Unsplash from '../classes/unsplash';
import Icons from '../classes/icons';
import Sidebar from './sidebar';

const form = (() => {
  let formElement;

  const INFO_WEATHER_ELEMENT_ID = 'weather-info';
  const MAP_WEATHER_ELEMENT_ID = 'weather-map';
  const INPUT_CITY_NAME_ID = 'cityname';
  const DIV_ERROR_ID = 'error-message';

  const buttonRequest = NewElement({
    tag: 'button', classes: 'btn btn-primary mt-2 mt-sm-0 ml-0 ml-sm-2', html: 'Request', attributes: { type: 'button' },
  });

  const buttonChangeUnits = NewElement({
    tag: 'button', classes: 'btn btn-sm btn-success mt-2 mt-sm-0 ml-0 ml-sm-2', html: 'to Fahrenheit', attributes: { type: 'button' },
  });

  const showErrorRequest = (errorType) => {
    const divError = formElement.querySelector(`div[id='${DIV_ERROR_ID}']`);
    const map = formElement.querySelector(`div[id='${MAP_WEATHER_ELEMENT_ID}']`);
    const info = formElement.querySelector(`div[id='${INFO_WEATHER_ELEMENT_ID}']`);

    document.body.style = '';
    map.innerHTML = '';
    info.innerHTML = '';
    divError.innerHTML = '';
    if (errorType === 0) {
      divError.className = 'alert alert-warning';
      divError.innerHTML = 'City not found!.';
    } else {
      divError.className = 'alert alert-danger';
      divError.innerHTML = 'You must set a valid API Key.';
    }
  };

  const showWeatherInfo = async (weatherinfo, maprequired) => {
    const map = formElement.querySelector(`div[id='${MAP_WEATHER_ELEMENT_ID}']`);
    const info = formElement.querySelector(`div[id='${INFO_WEATHER_ELEMENT_ID}']`);
    const input = formElement.querySelector(`input[id='${INPUT_CITY_NAME_ID}']`);
    const errorMessage = formElement.querySelector(`div[id='${DIV_ERROR_ID}']`);

    errorMessage.classList.add('d-none');
    input.value = '';

    if (maprequired) {
      const newWeatherImage = new Unsplash(weatherinfo.data.description);
      const imageUrl = await newWeatherImage.getImageUrl();

      document.body.style = `background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("${imageUrl}"); background-repeat:no-repeat; background-size:cover;`;
      map.innerHTML = '';
      map.appendChild(
        NewMap(
          {
            latitude: weatherinfo.data.coordinates.latitude,
            longitude: weatherinfo.data.coordinates.longitude,
          },
        ),
      );
    }

    info.innerHTML = '';
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
                  NewElement({ tag: 'img', attributes: { src: Icons.getFlagCountry(weatherinfo.data.country), style: 'margin-top:-5px;' } }),
                  NewElement({ tag: 'span', classes: 'ml-2', html: weatherinfo.data.city }),
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
                  NewElement({ tag: 'img', attributes: { src: Icons.getWeather(`${weatherinfo.data.icon}`), style: 'margin-top:-8px;margin-left:-5px;width:40px;height:40px;' } }),
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
              tag: 'label', classes: 'font-weight-bold', attributes: { for: 'spanHumidity' }, html: 'Humidity:',
            }),
            ElementsList(
              {
                container: NewElement({ tag: 'div', classes: 'form-control border-0', attributes: { id: 'spanHumidity' } }),
                childs: [
                  NewElement({ tag: 'span', classes: 'ml-2', html: `${weatherinfo.data.main.humidity}%` }),
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
            buttonChangeUnits,
            ElementsList(
              {
                container: NewElement({ tag: 'ul', attributes: { id: 'spanTemps' } }),
                childs: [
                  NewElement({ tag: 'li', html: `Current: ${weatherinfo.data.main.temp}` }),
                  NewElement({ tag: 'li', html: `Thermal Sensation: ${weatherinfo.data.main.feels_like}` }),
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

  const requestWeather = async (units, city, maprequired) => {
    const weather = new Weather({
      reqCity: city, reqUnits: units,
    });

    if (city.length > 0) {
      const newRequest = await weather.request();
      if (newRequest.result === 1) {
        Storage.addCity(newRequest.data.country, newRequest.data.city);
        Sidebar.loadCitiesNodes(Storage.getCities());
        showWeatherInfo(newRequest, maprequired);
      } else {
        showErrorRequest(newRequest.result);
      }
    }
  };

  const create = () => {
    const inputRequest = NewElement({
      tag: 'input', attributes: { type: 'text', id: `${INPUT_CITY_NAME_ID}`, autocomplete: 'off' }, classes: 'form-control ml-0 ml-sm-2',
    });

    const divError = NewElement({
      tag: 'div', classes: 'd-none', attributes: { id: `${DIV_ERROR_ID}` },
    });

    buttonRequest.addEventListener('click', async () => {
      await requestWeather('metrics', inputRequest.value, true);
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
                NewElement({ tag: 'div', classes: 'col-12 col-lg-6 mt-2 mt-lg-0 order-last order-lg-first', attributes: { id: `${MAP_WEATHER_ELEMENT_ID}` } }),
                NewElement({ tag: 'div', classes: 'col-12 col-lg-6 mt-2 mt-lg-0', attributes: { id: `${INFO_WEATHER_ELEMENT_ID}` } }),
              ],
            },
          ),
        ],
      },
    );

    buttonChangeUnits.addEventListener('click', async () => {
      const city = Storage.getLastCity();

      if (buttonChangeUnits.innerHTML.includes('Celsius')) {
        buttonChangeUnits.innerHTML = 'to Fahrenheit';
        await requestWeather('metrics', city, false);
      } else {
        buttonChangeUnits.innerHTML = 'to Celsius';
        await requestWeather('imperial', city, false);
      }
    });

    return formElement;
  };

  const get = () => formElement;

  return { create, get };
})();

export default form;