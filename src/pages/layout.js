import Storage from '../classes/storage';
import NewElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';
import ElementsList from '../rendering/elementslist';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Main from '../components/main';
import Home from './home';

const layout = (() => {
  const contentID = 'content';
  let layoutElement;
  let navbarElement;
  let sidebarElement;
  let mainElement;

  const loadPage = (page) => {
    if (layoutElement) {
      const main = layoutElement.querySelector(`div[id='${Main.getID()}']`);
      main.innerHTML = '';
      main.appendChild(page);
    }
  };

  const create = (page) => {
    navbarElement = Navbar.create();
    sidebarElement = Sidebar.create(Storage.getCities());
    mainElement = Main.create();

    layoutElement = NewElement({ tag: 'div', attributes: { id: contentID } });
    layoutElement.appendChild(navbarElement);
    layoutElement.appendChild(
      NestedElements(
        NewElement({ tag: 'main', classes: 'container-fluid' }),
        ElementsList({
          container: NewElement({ tag: 'div', classes: 'row' }),
          childs: [sidebarElement, mainElement],
        }),
      ),
    );

    if (!page) page = Home;
    loadPage(page);

    return layoutElement;
  };

  const get = () => layoutElement;

  return {
    create, get, loadPage,
  };
})();

export default layout;