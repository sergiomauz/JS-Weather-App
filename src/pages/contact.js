import NewElement from '../rendering/newelement';
import ElementsList from '../rendering/elementslist';

const Contact = (() => {
  const contact = ElementsList(
    NewElement('div', 'page contact d-flex flex-column'),
    NewElement('h1', 'contact-title', 'Contact'),
    NewElement('p', 'contact-text', 'Comments? Questions? Drop us a line!'),
    ElementsList(
      NewElement('form'),
      ElementsList(
        NewElement('div', 'form-group'),
        NewElement('label', null, 'E-mail:', null, ['for', 'email']),
        NewElement('input', 'form-control', null, null, ['id', 'email'], ['placeholder', 'Enter your e-mail here']),
      ),
      ElementsList(
        NewElement('div', 'form-group'),
        NewElement('label', null, 'Message:', null, ['for', 'message']),
        NewElement('textarea', 'form-control', null, null, ['id', 'message'], ['placeholder', 'Your message here'], ['rows', '5']),
      ),
      NewElement('button', 'btn btn-warning', 'Send'),
    ),
  );
  return contact;
})();

export default Contact;