import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import Sidebar from './sidebar';
import Storage from '../classes/storage';

const form = (() => {
  const formID = 'form-weather';
  let formElement;

  const create = () => {
    const buttonRequest = NewElement({
      tag: 'button', classes: 'btn btn-primary', html: 'Request', attributes: { type: 'button' },
    });

    formElement = ElementsList(
      {
        container: NewElement({ tag: 'form' }),
        childs: [
          ElementsList({
            container: NewElement({ tag: 'div', classes: 'form-group' }),
            childs: [
              NewElement({ tag: 'label', attributes: { for: 'cityname' }, html: 'City name:' }),
              NewElement({ tag: 'input', attributes: { type: 'text', id: 'cityname' }, classes: 'form-control' }),
            ],
          }),
          buttonRequest,
        ],
      },
    );

    buttonRequest.addEventListener('click', () => {
      const city = formElement.querySelector("input[class='form-control']");
      if (city.value.length > 0) {
        Storage.addCity(city.value);
        Sidebar.loadCitiesNodes(Storage.getCities());
        city.value = '';
      }
    });

    return formElement;
  };

  const get = () => formElement;

  const getID = () => formID;

  return { create, get, getID };
})();

export default form;