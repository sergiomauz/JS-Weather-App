import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const Home = (() => {
  const home = ElementsList(
    NewElement('div'),
    NewElement(
      'p',
      'home-text mt-5',
      'Welcome to "<span class="inline-logo">ToDo List Application</span>"',
    ),
  );
  return home;
})();

export default Home;
