/* eslint-disable object-curly-newline */
/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import Base from '../BaseLayout';

// eslint-disable-next-line react/prop-types
const Grid = ({ children, numOfRows, justify, breadcrumb }) => (
  <Base justify={justify} breadcrumb={breadcrumb}>
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
  breadcrumb: [],
};

export default Grid;
