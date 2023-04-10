import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
`;

export const PictureContainer = styled('div')`
  && {
    width: 61rem;
    max-height: 50rem;
    position: absolute;
    top: -10rem;
    left: -19rem;
    padding: 0;
    margin: 0;
  }
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  flex-direction: column;

  gap: 3rem;
`;
