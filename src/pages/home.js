import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import FormWeather from '../components/form';

const home = (() => {
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
      FormWeather.create(),
    ],
  });

  return home;
})();

export default home;
