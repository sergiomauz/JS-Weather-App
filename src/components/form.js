import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const form = (() => {
  const formID = 'form-weather';
  let formElement;

  const create = () => {
    const buttonRequest = NewElement({
      tag: 'button', classes: 'btn btn-primary', html: 'Request', attributes: { type: 'button' },
    });

    buttonRequest.addEventListener('click', () => {
      alert('aaa');
    });

    formElement = ElementsList(
      {
        container: NewElement({ tag: 'form' }),
        childs: [
          ElementsList({
            container: NewElement({ tag: 'div', classes: 'form-group' }),
            childs: [
              NewElement({ tag: 'label', attributes: { for: 'cityname' }, html: 'City name:' }),
              NewElement({ tag: 'input', attributes: { type: 'email', id: 'cityname' }, classes: 'form-control' }),
            ],
          }),
          buttonRequest,
        ],
      },
    );

    return formElement;
  };

  const get = () => formElement;

  const getID = () => formID;

  return { create, get, getID };
})();

export default form;