const newElement = (params) => {
  const {
    tag, classes, html, click, attributes,
  } = params;

  let element;

  if (tag) {
    element = document.createElement(tag);
  }

  if (classes) {
    element.classList.add(...classes.split(' '));
  }

  if (html) {
    element.innerHTML = html;
  }

  if (click) {
    element.addEventListener('click', () => { click(); });
  }

  if (attributes) {
    Object.keys(attributes).forEach((attribute) => {
      element.setAttribute(attribute, attributes[attribute]);
    });
  }

  return element;
};

export default newElement;