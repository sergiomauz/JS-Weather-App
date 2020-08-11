import newElement from '../rendering/newelement';

const Content = (() => {
  const name = 'content';

  const create = (layout) => {
    return newElement('div', null, null, null, ['id', name]).appendChild(layout);
  };

  const get = () => document.getElementById(name);

  return { create, get };
})();

export default Content;