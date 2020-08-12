const newElement = (params) => {
  const {
    tag, classes, html, click, attributes,
  } = params;

  let element;

  if (tag !== undefined) {
    element = document.createElement(tag);
  }

  if (classes !== undefined) {
    element.classList.add(...classes.split(' '));
  }

  if (html !== undefined) {
    element.innerHTML = html;
  }

  if (click !== undefined) {
    element.addEventListener('click', () => { click(); });
  }

  if (attributes !== undefined) {
    Object.keys(attributes).forEach((attribute) => {
      element.setAttribute(attribute, attributes[attribute]);
    });
  }

  return element;
};

export default newElement;