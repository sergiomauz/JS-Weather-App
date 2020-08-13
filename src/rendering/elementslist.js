const elementsList = (params) => {
  const {
    container, childs,
  } = params;

  childs.forEach((element) => {
    container.appendChild(element);
  });
  return container;
};

export default elementsList;