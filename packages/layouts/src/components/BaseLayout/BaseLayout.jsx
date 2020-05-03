/* eslint-disable object-curly-newline */
/** @jsx jsx */
import { jsx, Flex, useColorMode } from 'theme-ui';
import React from 'react';
import { useDeck } from 'mdx-deck';
import Header from '../Header';
import Footer from '../Footer';

// eslint-disable-next-line react/prop-types
const BaseLayout = ({ children, justify, breadcrumb, theme }) => {
  const [mode, setMode] = useColorMode();
  const deck = useDeck();

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
      <Footer numPages={deck.length} currentIndex={deck.index} />
    </Flex>
  );
};

BaseLayout.defaultProps = {
  justify: 'flex-start',
};

export default BaseLayout;
