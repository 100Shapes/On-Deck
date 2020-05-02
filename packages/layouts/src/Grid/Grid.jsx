/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui';

const space = 5;
// eslint-disable-next-line react/prop-types
const Grid = ({ children, justify, numOfRows }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      height: '100vh',
      justifyContent: justify,
      p: space + 1,
      width: '100vw',
    }}
  >
    <Box
      sx={{
        display: 'grid',
        gridGap: space,
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: `repeat(${numOfRows}, min-content)`,
      }}
    >
      {children}
    </Box>
  </Flex>
);

Grid.defaultProps = {
  numOfRows: 2,
  justify: 'flex-start',
};

export default Grid;
