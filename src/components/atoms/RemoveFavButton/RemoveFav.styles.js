import styled from 'styled-components';
import { CiCircleRemove } from 'react-icons/ci';
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
    background: ${({ theme }) => theme.colors.red};
  }
`;

export const Icon = styled(CiCircleRemove)`
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  color: ${({ theme }) => theme.colors.white};
`;
