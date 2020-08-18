import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import NewMap from '../rendering/newmap';

const Home = (() => {
  const home = ElementsList({
    container: NewElement({ tag: 'div' }),
    childs: [
      NewElement(
        {
          tag: 'p',
          classes: 'home-text mt-5',
          html: 'Welcome to "<span class="inline-logo">ToDo List Application</span>"',
        },
      ),
      NewMap({
        latitude: '-18.01',
        longitude: '-70.25',
      }),
    ],
  });
  return home;
})();

export default Home;
