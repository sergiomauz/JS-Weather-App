import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const Contact = (() => {
  const contact = ElementsList(
    NewElement({ tag: 'div', classes: 'page contact d-flex flex-column' }),
    NewElement({ tag: 'h1', classes: 'contact-title', html: 'Contact' }),
    NewElement({ tag: 'p', classes: 'contact-text', html: 'Comments? Questions? Drop us a line!' }),
    ElementsList(
      NewElement({ tag: 'form' }),
      ElementsList(
        NewElement({ tag: 'div', classes: 'form-group' }),
        NewElement({ tag: 'label', html: 'E-mail:', attributes: { for: 'email' } }),
        NewElement({
          tag: 'input',
          classes: 'form-control',
          attributes: { id: 'email', placeholder: 'Enter your e-mail here' },
        }),
      ),
      ElementsList(
        NewElement({ tag: 'div', classes: 'form-group' }),
        NewElement({ tag: 'label', html: 'Message:', attributes: { for: 'message' } }),
        NewElement({
          tag: 'textarea',
          classes: 'form-control',
          attributes: { id: 'message', placeholder: 'Your message here', rows: '5' },
        }),
      ),
      NewElement({ tag: 'button', classes: 'btn btn-warning', html: 'Send' }),
    ),
  );
  return contact;
})();

export default Contact;