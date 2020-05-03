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
    fontWeight: 'normal',
  },
};

export default styles;
