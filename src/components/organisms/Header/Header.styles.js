import styled from 'styled-components';
import breakpoints from '../../breakpoints/breakpoints';
export const Wrapper = styled.header`
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const Container = styled.div`
  position: relative;
  width: 900px;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const SearchContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageBox = styled.div`
  height: 40%;
  width: 40%;
`;
