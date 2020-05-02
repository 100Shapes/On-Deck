/** @jsx jsx */
import { jsx, Box } from 'theme-ui';

// eslint-disable-next-line react/prop-types
const GridItem = ({ children, row, column }) => (
  <Box
    sx={{
      gridColumn: column,
      gridRow: row,
    }}
  >
    {children}
  </Box>
);

GridItem.defaultProps = {
  column: '1 / span 1',
  row: 1,
};

export default GridItem;
