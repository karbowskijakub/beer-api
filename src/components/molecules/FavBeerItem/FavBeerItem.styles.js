import styled from 'styled-components';
import { BsHeartHalf } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
export const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  height: 100%;
`;

export const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1.5em;
  position: relative;
  margin-top: 5em;
  cursor: pointer;
  height: 500px;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.gold};
  border: 2px solid;

  &:last-child {
    margin-bottom: 5em;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-bottom: 10px;
  }
  ul li {
    list-style: none;
    padding-bottom: 10px;
    margin-right: 2.3em;
    &:first-child {
      margin-top: 4em;
    }
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 350px;
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-right-radius: 1.5em;
  border-top-left-radius: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 1.3em;
  border-bottom-left-radius: 1.3em;
  text-align: center;
  background: linear-gradient(transparent, ${({ theme }) => theme.colors.strongBlack} 30%);
  transition: all 1.2s;

  color: ${({ theme }) => theme.colors.white};
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  li {
    text-align: center;
  }
`;

export const ImgDiv = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
    height: 90%;
    object-fit: cover;
    border-radius: 1.5em;
    overflow: hidden;
  }
`;

export const FavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.grey};
  border: none;
  position: absolute;
  top: -2em;
  right: -1.5em;
  cursor: pointer;
  transition: all 0.4s;

  &.active {
    background: ${({ theme }) => theme.colors.green};
  }
  &.close {
    background: ${({ theme }) => theme.colors.grey};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.green};
  }
`;

export const Icon = styled(BsHeartHalf)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.white};
`;
