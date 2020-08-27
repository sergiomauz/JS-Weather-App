import NewElement from '../rendering/newelement';

const main = (() => {
  const mainID = 'main-container';
  let mainElement;

  const create = () => {
    mainElement = NewElement({ tag: 'div', classes: 'col-md-9 ml-sm-auto col-lg-10 px-md-4', attributes: { id: mainID } });

    return mainElement;
  };

  const get = () => mainElement;

  const getID = () => mainID;

  return { create, get, getID };
})();

export default main;