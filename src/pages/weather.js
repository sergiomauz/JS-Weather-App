import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';
import FormWeather from '../components/form';

const weather = (() => {
  const weather = ElementsList({
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
          container: NewElement({ tag: 'div', classes: 'row justify-content-center' }),
          childs: [
            ElementsList(
              {
                container: NewElement({ tag: 'div', classes: 'col-12 col-lg-6' }),
                childs: [
                  FormWeather.create(),
                ],
              },
            ),
          ],
        },
      ),
    ],
  });
  return weather;
})();

export default weather;
