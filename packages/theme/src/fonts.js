import './fonts.css';

const fontSizes = [18, 30, 40, 53.32, 71.0756, 94.7437, 126.293].map((v) => {
  const s = `${(100 * v) / 1920}vw`;
  return s;
});

const fonts = {
  body: 'Baton Turbo, "Open Sans", sans-serif',
  heading: 'Brando, Georgia, serif',
  monospace: 'Corrier, monospace',
};

const textStyles = {
  small: {
    fontSize: 0,
    fontFamily: 'body',
  },
};

export default {
  fonts,
  fontSizes,
  textStyles,
};
