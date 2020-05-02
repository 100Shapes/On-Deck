import palette from './palette';

const heading = {
  margin: 0,
};

const styles = {
  root: {
    bg: palette.blue,
  },
  h1: {
    fontSize: 4,
    ...heading,
  },
  h2: {
    fontSize: 2,
    fontFamily: 'body',
    ...heading,
  },
  p: {
    fontSize: 2,
    margin: 0,
  },
  'div,body': {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    transition: 'background-color 0.6s cubic-bezier(0.19, 1, 0.22, 1)',
  },
};

export default styles;
