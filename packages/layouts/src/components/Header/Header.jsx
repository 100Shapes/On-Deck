/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui';
import MdxDeckHeader from '@mdx-deck/gatsby-plugin/src/header';
import intersperse from '../../helpers/intersperse';

// eslint-disable-next-line react/prop-types
const Header = ({ parts }) => {
  const trail = intersperse(parts, ' • ');
  return (
    <MdxDeckHeader>
      <Box
        sx={{
          left: 0,
          position: 'absolute',
          px: 6,
          py: 4,
          top: 0,
          width: '100%',
          zIndex: 2,
        }}
      >
        <Styled.p
          sx={{
            variant: 'textStyles.small',
          }}
        >
          {trail}
        </Styled.p>
      </Box>
    </MdxDeckHeader>
  );
};

Header.defaultProps = {
  parts: ['100 Shapes', 'Slides'],
};

export default Header;
