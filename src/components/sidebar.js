import NewElement from '../rendering/newelement';
import NestedElements from '../rendering/nestedelements';
import ElementsList from '../rendering/elementslist';
import Storage from '../classes/storage';
import Icons from '../classes/icons';

const sidebar = (() => {
  let sidebarElement;
  const sidebarID = 'sidebar-menu';
  const citiesnodesID = 'cities-nodes';
  const citiesNodes = NewElement({ tag: 'ul', classes: 'nav flex-column', attributes: { id: `${citiesnodesID}` } });

  const createCityNode = (city) => {
    const liNode = ElementsList({
      container: NewElement({ tag: 'li', classes: 'd-flex nav-item m-2' }),
      childs: [
        NewElement({ tag: 'img', attributes: { src: `${Icons.getFlagCountry(city.country)}` } }),
        NewElement({
          tag: 'a', classes: 'nav-link pl-2', html: `${city.name}`, attributes: { href: '#' },
        }),
      ],
    });

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
    const btnClear = NewElement({
      tag: 'button', classes: 'btn btn-outline-danger', html: '<i class="fas fa-times"></i> Clear log',
    });

    btnClear.addEventListener('click', () => {
      Storage.clearCities();
      citiesNodes.innerHTML = '';
    });

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
            btnClear,
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
