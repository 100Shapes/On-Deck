import palette from './palette';
import colorModes from './colorModes';
import styles from './styles';
import fontsConfig from './fonts';
import './global.css';

export default {
  colors: {
    ...palette,
    ...colorModes.default,
    modes: colorModes.options,
  },
  ...fontsConfig,
  styles,
};
