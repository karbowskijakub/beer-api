import styled from 'styled-components';
import { BsHeartHalf } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

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
