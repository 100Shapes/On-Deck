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
          width: '100%',
          position: 'absolute',
          zIndex: 2,
          top: 0,
          left: 0,
          py: 4,
          px: 6,
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
