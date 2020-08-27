import NewElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';

const footer = (() => {
  const footerID = 'footer-container';
  let footerElement;

  const create = () => {
    footerElement = NestedElements(
      NewElement({ tag: 'footer', classes: 'footer bg-white' }),
      NewElement({ tag: 'div', classes: 'container' }),
    );
  };

  const get = () => footerElement;

  const getID = () => footerID;

  return { create, get, getID };
})();

export default footer;