import styled from 'styled-components';
import breakpoints from '../../breakpoints/breakpoints';

export const BeersSection = styled.div`
  box-shadow: inset 0 0 15px ${({ theme }) => theme.colors.strongBlack};
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5em;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  @media only screen and ${breakpoints.device.s} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and ${breakpoints.device.xl} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and ${breakpoints.device.xxl} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  items-align: center;
  max-width: 100%;
`;
