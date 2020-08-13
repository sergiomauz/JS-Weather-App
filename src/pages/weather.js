import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const weather = (() => {
  const weather = ElementsList({
    container: NewElement({ tag: 'div', classes: 'page contact d-flex flex-column' }),
    childs: [
      NewElement({ tag: 'h1', classes: 'contact-title', html: 'Contact' }),
      NewElement({ tag: 'p', classes: 'contact-text', html: 'Comments? Questions? Drop us a line!' }),
      ElementsList({
        container: NewElement({ tag: 'form' }),
        childs: [
          ElementsList({
            container: NewElement({ tag: 'div', classes: 'form-group' }),
            childs: [
              NewElement({ tag: 'label', html: 'E-mail:', attributes: { for: 'email' } }),
              NewElement({
                tag: 'input',
                classes: 'form-control',
                attributes: { id: 'email', placeholder: 'Enter your e-mail here' },
              }),
            ],
          }),
          ElementsList({
            container: NewElement({ tag: 'div', classes: 'form-group' }),
            childs: [
              NewElement({ tag: 'label', html: 'Message:', attributes: { for: 'message' } }),
              NewElement({
                tag: 'textarea',
                classes: 'form-control',
                attributes: { id: 'message', placeholder: 'Your message here', rows: '5' },
              }),
            ],
          }),
          NewElement({ tag: 'button', classes: 'btn btn-warning', html: 'Send' }),
        ],
      }),
    ],
  });
  return weather;
})();

export default weather;