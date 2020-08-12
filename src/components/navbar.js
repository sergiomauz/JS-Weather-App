import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const navbar = (() => {
  const navbarID = 'navbar-container';
  let navbarElement;

  const create = () => {
    navbarElement = ElementsList(
      NewElement('nav', 'navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow', null, null, ['id', navbarID]),
      ElementsList(
        NewElement('a', 'navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-center', null, null, ['href', '#']),
        NewElement('span', 'logo', 'Marvelous Weather'),
      ),
    );

    return navbarElement;
  };

  const get = () => navbarElement;

  const getID = () => navbarID;

  return { create, get, getID };
})();

export default navbar;
