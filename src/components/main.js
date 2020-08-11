import NewElement from '../rendering/newelement';

const main = (() => {
  const mainName = 'main-container';
  let mainElement;

  const create = () => {
    mainElement = NewElement('div', 'col-md-9 ml-sm-auto col-lg-10 px-md-4', null, null, ['id', mainName]);
    return mainElement;
  };

  const get = () => mainElement;

  const getID = () => mainName;

  return { create, get, getID };
})();

export default main;