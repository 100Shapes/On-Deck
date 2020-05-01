/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React from 'react';

const TestLayout = ({ children }) => (
  <>
    <Box
      sx={{
        bg: 'blue',
        py: 2,
        px: 4,
        borderRadius: 2,
      }}
    >
      Test Layout
    </Box>
    {children}
  </>
);

export default TestLayout;
