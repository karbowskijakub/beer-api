import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.grey};

  bottom: 0;
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledLogo = styled.div`
  padding: 0 4em;
  font-size: ${({ theme }) => theme.fontSize.xs};
  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.white};
  }
`;
