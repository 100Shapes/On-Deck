/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Base from '../BaseLayout';

// eslint-disable-next-line react/prop-types
const Grid = ({ children, justify, numOfRows }) => (
  <Base justify={justify}>
    <Box
      sx={{
        display: 'grid',
        gridColumnGap: 79,
        gridRowGap: 48,
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: `repeat(${numOfRows}, min-content)`,
      }}
    >
      {children}
    </Box>
  </Base>
);

Grid.defaultProps = {
  numOfRows: 2,
  justify: 'flex-start',
};

export default Grid;
