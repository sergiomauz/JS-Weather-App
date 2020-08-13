import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const Home = (() => {
  const home = ElementsList({
    container: NewElement({ tag: 'div' }),
    childs: [NewElement(
      {
        tag: 'p',
        classes: 'home-text mt-5',
        html: 'Welcome to "<span class="inline-logo">ToDo List Application</span>"',
      },
    )],
  });
  return home;
})();

export default Home;
