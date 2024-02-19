import { styled } from '@mui/material/styles';
import { Grid, Box } from '@mui/material';

export const CustomContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;
export const CustomBox = styled('div')`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
`;
export const PinkCard = styled('div')`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 4rem;
  flex-direction: column;
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  background: ${(props) => props.theme.palette.background.paper};
  height: 100vh;
`;

export const GridContainer = styled(Grid)`
  height: 20rem;
  width: 15rem;
  background: white;
  border-radius: 1rem;
`;

export const TopSection = styled('img')`
  height: 100%;
  background-size: cover;
  background-position: center;
`;

export const BottomSection = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;
