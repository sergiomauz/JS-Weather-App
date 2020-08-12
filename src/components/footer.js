import NewElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';

const footer = (() => {
  const footerID = 'footer-container';
  let footerElement;

  const create = () => {
    footerElement = NestedElements(
      NewElement('footer', 'footer bg-white'),
      NewElement('div', 'container'),
    );
  };

  const get = () => footerElement;

  const getID = () => footerID;

  return { create, get, getID };
})();

export default footer;