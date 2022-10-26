import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { BsHeartHalf } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { Twirl as Hamburger } from 'hamburger-react';
import breakpoints from '../../breakpoints/breakpoints';

export const Wrapper = styled.nav`
  position: relative;
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.grey};
  justify-content: space-between;
`;

export const Logo = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30000;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 1.5em;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 20px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gold};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media only screen and ${breakpoints.device.md} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  p {
    display: none;
    @media only screen and ${breakpoints.device.md} {
      display: block;
    }
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2em;
  height: 100%;
`;

export const Icon = styled(BsHeartHalf)`
  display: none;
  @media only screen and ${breakpoints.device.md} {
    display: block;
  }
`;

export const StyledLogo = styled(NavLink)`
  text-transform: uppercase;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0 0 3em;
  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};

  transition: ease-in 0.3s;
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  @media only screen and ${breakpoints.device.xs} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  @media only screen and ${breakpoints.device.sm} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding: 0 5em;
  }
`;

export const StyledIcon = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;

  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-right: 1.3em;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const HamburgerMenu = styled(Hamburger)``;

export const HamburgerDiv = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-right: 0.5em;
  z-index: 0;
  @media only screen and ${breakpoints.device.md} {
    display: none;
  }
  &.active {
    position: fixed;
  }
`;
export const NavMenuSecond = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  @media only screen and ${breakpoints.device.md} {
    display: none;
  }
`;

export const NavMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 50%;
  height: 100%;

  z-index: 1000;
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);

  overflow: hidden;

  background: ${({ theme }) => theme.colors.black};
  transform: translateX(200%);
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translateX(100%);
  }
`;

export const HamburgerDivMobile = styled.div`
  position: absolute;
  top: 1.5em;
  right: 2em;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 0.5em;
  z-index: 20000;
  @media only screen and ${breakpoints.device.md} {
    display: none;
  }
  &.active {
    position: fixed;
  }
`;

export const MobileMenu = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledLinkMobile = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1em 2em;
  height: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 90px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.gold};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const StyledIconMobile = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1em 2em;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxl};

  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
    color: ${({ theme }) => theme.colors.gold};
  }
`;

export const IconMobile = styled(BsHeartHalf)``;
