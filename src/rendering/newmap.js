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
        src: `https://maps.google.com/?ll=${latitude},${longitude}&z=13&t=k&ie=UTF8&iwloc=&output=embed`,
        height: '700px',
        width: '100%',
        frameborder: '0',
        style: 'border: 0',
      },
    },
  );

  return element;
};

export default newMap;