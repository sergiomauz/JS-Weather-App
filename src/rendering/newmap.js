import NewElement from './newelement';

const newMap = (params) => {
  const {
    latitude, longitude,
  } = params;

  const element = NewElement(
    {
      tag: 'iframe',
      attributes: {
        class: 'iframe',
        src: `https://maps.google.com/?ll=${latitude},${longitude}&z=13&output=embed`,
        height: '500',
        width: '100%',
        frameborder: '0',
        style: 'border: 0',
      },
    },
  );

  return element;
};

export default newMap;