// Header right here
// Background

import styled from '@emotion/styled';
import Logo from '../images/Logo';

// Basic styling
const Wrap = styled.div`
  text-align: center;
`;

function Layout({ children }) {
  return (
    <Wrap>
      <div>
        <Logo />
      </div>
      {children}
    </Wrap>
  );
}

export default Layout;
