import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomBtn = styled(Button)`
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
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 0.5rem 0;
  }
`;

export const SocialMediaBtn = styled(Button)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.common.black};
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
  border-radius: 1.5rem;
  background: ${(props) => props.theme.palette.background.default};
  color: ${(props) => props.theme.palette.secondary.dark};
  border: 3px solid ${(props) => props.theme.palette.secondary.dark};
  padding: 0.5rem 6.5rem;
  text-transform: lowercase;
  '& muibutton-root:hover': {
    background-color: ${(props) => props.theme.palette.background.default};
  }
  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 0.5rem 3rem;
    width: 100%;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 0.5rem 0;
  }
`;

export const AccentTypography = styled(Typography)`
  && {
    font-family: Poppins;
    font-weight: 600;
  }
`;
