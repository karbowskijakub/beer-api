import React from 'react';
import { Wrapper, Container, StyledLogo } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLogo>
          <p>&copy;Created By Jakub Karbowski</p>
        </StyledLogo>
      </Container>
    </Wrapper>
  );
};

export default Footer;
