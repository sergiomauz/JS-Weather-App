import NewElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';
import ElementsList from '../rendering/elementslist';

const sidebar = (() => {
  const sidebarID = 'sidebar-menu';
  let sidebarElement;

  const create = () => {
    sidebarElement = NestedElements(
      NewElement({ tag: 'nav', classes: 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse', attributes: { id: sidebarID } }),
      NewElement({ tag: 'div', classes: 'sidebar-sticky pt-3' }),
      ElementsList({
        container: NewElement({ tag: 'ul', classes: 'nav flex-column' }),
        childs: [
          NestedElements(
            NewElement({ tag: 'li', classes: 'text-center mb-3' }),
            NewElement({
              tag: 'btn', classes: 'btn btn-sm btn-info', html: 'NEW QUERY +', attributes: { href: '#' },
            }),
          ),
        ],
      }),
    );

    return sidebarElement;
  };

  const get = () => sidebarElement;

  const getID = () => sidebarID;

  return { create, get, getID };
})();

export default sidebar;
