import React from 'react';
import { useState, useEffect } from 'react';
import {
  Icon,
  StyledIcon,
  HamburgerMenu,
  HamburgerDiv,
  HamburgerDivMobile,
  MobileMenu,
  StyledLinkMobile,
  StyledIconMobile,
  IconMobile,
  StyledLink,
  NavMenu,
  Logo,
  Wrapper,
  StyledLogo,
  NavMenuSecond,
  NavMobile,
} from './Navigation.styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const [hamburger, setHamburger] = useState(false);

  const changeHamburger = () => {
    if (window.scrollY >= 90) {
      setHamburger(true);
    } else setHamburger(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', changeHamburger);
  }, []);

  return (
    /* Mobile-menu */
    <Wrapper>
      <NavMobile className={isOpen ? 'active' : null}>
        <HamburgerDivMobile className={hamburger ? 'active' : null}>
          <HamburgerMenu toggled={isOpen} rounded toggle={setOpen}></HamburgerMenu>
        </HamburgerDivMobile>
        <MobileMenu>
          <StyledLinkMobile className={isOpen ? 'active' : null} to="/">
            <p>Home</p>
          </StyledLinkMobile>
          <StyledIconMobile to="/favourites">
            <IconMobile />
          </StyledIconMobile>
        </MobileMenu>
      </NavMobile>

      <Logo>
        <StyledLogo to="/">Beer-Wiki</StyledLogo>
      </Logo>

      <NavMenu>
        <StyledLink to="/">
          <p>Home</p>
        </StyledLink>
        <StyledIcon to="/favourites">
          <Icon />
        </StyledIcon>
      </NavMenu>
      <NavMenuSecond>
        <HamburgerDiv>
          <HamburgerMenu toggled={isOpen} rounded toggle={setOpen}></HamburgerMenu>
        </HamburgerDiv>
      </NavMenuSecond>
    </Wrapper>
  );
};

export default Navigation;
