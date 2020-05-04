/* eslint-disable object-curly-newline */
/** @jsx jsx */
import { jsx, Flex, useColorMode } from 'theme-ui';
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

// eslint-disable-next-line react/prop-types
const BaseLayout = ({ children, justify, breadcrumb, theme }) => {
  const [mode, setMode] = useColorMode();

  React.useEffect(() => {
    if (mode !== theme) {
      setMode(theme);
    }
  });

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '100%',
        justifyContent: justify,
        p: 6,
        width: '100%',
      }}
    >
      <Header parts={breadcrumb} />
      {children}
      <Footer />
    </Flex>
  );
};

BaseLayout.defaultProps = {
  justify: 'flex-start',
};

export default BaseLayout;
