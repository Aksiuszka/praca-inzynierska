import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBtn = styled(Button)`
  maxwidth: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.palette.text.accent};
  color: ${(props) => props.theme.palette.common.white};
  text-transform: lowercase;
  padding: 0.5rem 6.5rem;
  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 0.5rem 3rem;
    width: 100%;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 0.5rem 0;
  }
`;

export const CustomTypography = styled(Typography)`
  && {
    font-family: Poppins;
    font-weight: 600;
  }
`;

export const AccentBtn = styled(Button)`
  && {
    width: 100%;
    border-radius: 1.5rem;
    background: ${(props) => props.theme.palette.background.white};
    color: ${(props) => props.theme.palette.primary.main};
    box-shadow: 0.25rem 0.25rem 1.25rem 0.25rem rgba(136, 136, 136, 0.25);
    padding: 0.5rem 2rem;
    text-transform: capitalize;
  }
`;

export const AccentTypography = styled(Typography)`
  && {
    font-family: Poppins;
    font-weight: 600;
  }
`;
