/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import Header from '../Header';
import Footer from '../Footer';

// eslint-disable-next-line react/prop-types
const BaseLayout = ({ children, justify }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      justifyContent: justify,
      p: 6,
      height: '100%',
      width: '100%',
      bg: 'blue',
    }}
  >
    <Header />
    {children}
    <Footer />
  </Flex>
);

BaseLayout.defaultProps = {
  justify: 'flex-start',
};

export default BaseLayout;
