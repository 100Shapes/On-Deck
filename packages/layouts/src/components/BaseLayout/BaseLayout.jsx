/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import Header from '../Header';
import Footer from '../Footer';

// eslint-disable-next-line react/prop-types
const BaseLayout = ({ children, justify }) => (
  <Flex
    sx={{
      flexDirection: 'column',
      height: '100%',
      justifyContent: justify,
      p: 6,
      width: '100%',
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
