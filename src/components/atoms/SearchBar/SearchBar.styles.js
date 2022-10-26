import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import breakpoints from '../../breakpoints/breakpoints';

export const BoxDiv = styled(Box)`
  width: 40%;
  height: 150%;
  @media only screen and ${breakpoints.device.xss} {
    height: 170%;
  }
  @media only screen and ${breakpoints.device.xs} {
    width: 60%;
    height: 50%;
  }
  @media only screen and ${breakpoints.device.md} {
    width: 100%;
  }
`;

export const InputField = styled(TextField)`
  top: 6em;
  &input::placeholder: {
    color: ${({ theme }) => theme.colors.gold};
  }
  & label.Mui-focused {
    color: ${({ theme }) => theme.colors.gold};
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border: 3px solid ${({ theme }) => theme.colors.gold};
    }
  }
`;
