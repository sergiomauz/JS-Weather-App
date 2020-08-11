import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import Home from '../pages/home';
import mainContainer from './main';

const navbar = (() => {
  const navbarName = 'navbar';

  const create = () => ElementsList(
    NewElement('nav', 'navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow', null, null, ['id', navbarName]),
    ElementsList(
      NewElement('a', 'navbar-brand col-md-3 col-lg-2 mr-0 px-3 text-center', null, () => { mainContainer.display(Home); }, ['href', '#']),
      NewElement('span', 'logo', 'ToDo List'),
    ),
  );

  const get = () => document.getElementById(navbarName);

  return { create, get };
})();

export default navbar;
