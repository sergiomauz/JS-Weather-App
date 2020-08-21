import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import NewMap from '../rendering/newmap';
import FormWeather from '../components/form';

const Home = (() => {
  const home = ElementsList({
    container: NewElement({ tag: 'div' }),
    childs: [
      NewElement(
        {
          tag: 'div',
          classes: 'd-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom',
          html: '<h1 class="h2">Weather App</h1>',
        },
      ),
      ElementsList(
        {
          container: NewElement({ tag: 'div', classes: 'row' }),
          childs: [
            ElementsList(
              {
                container: NewElement({ tag: 'div', classes: 'col-12 col-lg-6' }),
                childs: [
                  FormWeather.create(),
                ],
              },
            ),
            ElementsList(
              {
                container: NewElement({ tag: 'div', classes: 'col-12 col-lg-6 d-flex justify-content-center' }),
                childs: [
                  NewMap({
                    latitude: '-18.01',
                    longitude: '-70.25',
                  }),
                ],
              },
            ),
          ],
        },
      ),
    ],
  });
  return home;
})();

export default Home;
