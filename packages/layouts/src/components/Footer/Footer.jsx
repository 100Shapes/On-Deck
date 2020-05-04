/** @jsx jsx */
import { jsx, Flex, Styled } from 'theme-ui';
import { useDeck } from 'mdx-deck';

// eslint-disable-next-line react/prop-types
const Footer = () => {
  const year = new Date().getFullYear();
  const copyright = `Copyright © ${year} 100 Shapes Ltd. All rights reserved.`;
  const { index: currentIndex, length: pagesLength } = useDeck();
  const progressStr = `${currentIndex + 1} / ${pagesLength}`;

  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
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
      <Styled.p
        sx={{
          variant: 'textStyles.small',
        }}
      >
        {progressStr}
      </Styled.p>
    </Flex>
  );
};

export default Footer;
