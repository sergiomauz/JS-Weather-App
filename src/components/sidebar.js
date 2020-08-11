import newElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';
import ElementsList from '../rendering/elementslist';

const sidebar = (() => {
  const sidebarName = 'sidebar-menu';

  const create = () => {
    const content = NestedElements(
      newElement('nav', 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse', null, null, ['id', sidebarName]),
      newElement('div', 'sidebar-sticky pt-3'),
      ElementsList(
        newElement('ul', 'nav flex-column'),
        NestedElements(
          newElement('li', 'text-center mb-3'),
          newElement('btn', 'btn btn-sm btn-info', 'NEW QUERY +', null, ['href', '#']),
        ),
      ),
    );

    return content;
  };

  const get = () => document.getElementById(sidebarName);

  return { create, get };
})();

export default sidebar;
