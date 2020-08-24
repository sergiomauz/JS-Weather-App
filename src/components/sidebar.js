import NewElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';
import ElementsList from '../rendering/elementslist';

const sidebar = (() => {
  let sidebarElement;
  const sidebarID = 'sidebar-menu';
  const citiesnodesID = 'cities-nodes';
  const citiesNodes = NewElement({ tag: 'ul', classes: 'nav flex-column', attributes: { id: `${citiesnodesID}` } });

  const createCityNode = (city) => {
    const liNode = NestedElements(
      NewElement({ tag: 'li', classes: 'nav-item' }),
      NewElement({
        tag: 'a', classes: 'nav-link', html: `${city}`, attributes: { href: '#' },
      }),
    );

    liNode.addEventListener('click', () => liNode.querySelector("a[class = 'nav-link']").innerHTML);

    return liNode;
  };

  const loadCitiesNodes = (cities) => {
    citiesNodes.innerHTML = '';
    (cities || []).forEach((city) => {
      citiesNodes.appendChild(createCityNode(city));
    });

    return citiesNodes;
  };

  const create = (cities) => {
    loadCitiesNodes(cities);

    sidebarElement = NestedElements(
      NewElement({ tag: 'nav', classes: 'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse', attributes: { id: sidebarID } }),
      ElementsList({
        container: NewElement({ tag: 'div', classes: 'sidebar-sticky' }),
        childs: [
          NestedElements(
            NewElement({
              tag: 'div', classes: 'd-flex justify-content-center py-3',
            }),
            NewElement({
              tag: 'button', classes: 'btn btn-danger', html: '<i class="fas fa-times"></i> Clear log',
            }),
          ),
          citiesNodes,
        ],
      }),
    );

    return sidebarElement;
  };

  const get = () => sidebarElement;

  const getID = () => sidebarID;

  return {
    create, loadCitiesNodes, get, getID,
  };
})();

export default sidebar;
