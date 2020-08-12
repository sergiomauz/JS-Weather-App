import NewElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';
import ElementsList from '../rendering/elementslist';

const sidebar = (() => {
  const sidebarID = 'sidebar-menu';
  let sidebarElement;

  const create = () => {
    sidebarElement = NestedElements(
      NewElement('nav', 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse', null, null, ['id', sidebarID]),
      NewElement('div', 'sidebar-sticky pt-3'),
      ElementsList(
        NewElement('ul', 'nav flex-column'),
        NestedElements(
          NewElement('li', 'text-center mb-3'),
          NewElement('btn', 'btn btn-sm btn-info', 'NEW QUERY +', null, ['href', '#']),
        ),
      ),
    );

    return sidebarElement;
  };

  const get = () => sidebarElement;

  const getID = () => sidebarID;

  return { create, get, getID };
})();

export default sidebar;
