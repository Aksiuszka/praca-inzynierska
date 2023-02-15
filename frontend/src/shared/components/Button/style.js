import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBtn = styled(Button)`
  && {
    width: 100%;
    border-radius: 1.5rem;
    background: ${(props) => props.theme.palette.text.accent};
    color: ${(props) => props.theme.palette.common.white};
    padding: 0.5rem 2rem;
    text-transform: capitalize;
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
