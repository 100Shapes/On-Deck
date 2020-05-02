/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

// eslint-disable-next-line react/prop-types
const Header = () => (
  <Box
    sx={{
      width: '100%',
      position: 'absolute',
      zIndex: 2,
      top: 0,
      left: 0,
      py: 3,
      px: 4,
    }}
  >
    Header
  </Box>
);

export default Header;
