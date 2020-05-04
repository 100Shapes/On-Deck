import colorModes from './colorModes';
import fontsConfig from './fonts';
import palette from './palette';
import space from './space';
import styles from './styles';
import './global.css';

export default {
  colors: {
    ...colorModes.default,
    ...palette,
    modes: colorModes.options,
  },
  ...fontsConfig,
  space,
  styles,
};
