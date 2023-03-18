import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AccentTypography = styled('span')`
  color: ${(props) => props.theme.palette.text.accent};
`;
export const CustomContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;
export const FlexContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1.5rem;
  max-width: 75rem;
`;
export const Title = styled(Typography)`
  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 1.7rem;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.4rem;
  }
`;
export const ContentContainer = styled('div')`
  position: relative;
  width: 100%;
  min-height: 100rem;
`;

export const BottomContainer = styled(Grid)`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.palette.pastels.orange};
  border-radius: 1.5rem;
  padding: 4rem;
`;
export const TopContainer = styled(Container)`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.pastels.orange};
  border-radius: 1.5rem;
  gap: 2rem;
  padding: 4rem;
`;
