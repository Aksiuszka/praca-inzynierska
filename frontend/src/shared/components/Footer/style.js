import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Dot = styled('div')`
  width: 0.625rem;
  height: 0.625rem;
  margin-inline: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme.palette.text.accent};
  ${(props) => props.theme.breakpoints.down('lg')} {
    display: none;
  }
`;
export const CustomContainer = styled(Grid)`
  ${(props) => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`;
export const CustomGrid = styled(Grid)`
  && {
    padding: 1.5rem;
  }
`;
