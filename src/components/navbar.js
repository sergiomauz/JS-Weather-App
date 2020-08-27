import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const navbar = (() => {
  const navbarID = 'navbar-container';
  let navbarElement;

  const create = () => {
    navbarElement = ElementsList({
      container: NewElement({ tag: 'nav', classes: 'navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow', attributes: { id: navbarID } }),
      childs: [ElementsList({
        container: NewElement({ tag: 'a', classes: 'navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-center', attributes: { href: '#' } }),
        childs: [NewElement({ tag: 'span', classes: 'logo', html: 'My Weather App' })],
      })],
    });

    return navbarElement;
  };

  const get = () => navbarElement;

  const getID = () => navbarID;

  return { create, get, getID };
})();

export default navbar;
