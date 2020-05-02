/** @jsx jsx */
import { jsx, Box, Styled } from 'theme-ui';

// eslint-disable-next-line react/prop-types
const Footer = () => {
  const year = new Date().getFullYear();
  const copyright = `Copyright © ${year} 100 Shapes Ltd. All rights reserved.`;
  return (
    <Box
      sx={{
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        bottom: 0,
        left: 0,
        py: 5,
        px: 6,
      }}
    >
      <Styled.p
        sx={{
          variant: 'textStyles.small',
        }}
      >
        {copyright}
      </Styled.p>
    </Box>
  );
};

export default Footer;
