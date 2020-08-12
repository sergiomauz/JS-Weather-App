import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const Home = (() => {
  const home = ElementsList(
    NewElement({ tag: 'div' }),
    NewElement(
      {
        tag: 'p',
        classes: 'home-text mt-5',
        html: 'Welcome to "<span class="inline-logo">ToDo List Application</span>"',
      },
    ),
  );
  return home;
})();

export default Home;
