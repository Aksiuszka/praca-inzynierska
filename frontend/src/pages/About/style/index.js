import { Typography, Grid, Container, Box } from '@mui/material';
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
  min-height: 132rem;
  ${(props) => props.theme.breakpoints.down('lg')} {
    min-height: inherit;
    max-width: 90vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
  }
  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0rem;
  }
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
  ${(props) => props.theme.breakpoints.down('lg')} {
    position: relative;
    padding-inline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    background-color: ${(props) => props.theme.palette.background.default};
  }
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
  ${(props) => props.theme.breakpoints.down('lg')} {
    position: relative;
    padding-inline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    background-color: ${(props) => props.theme.palette.background.default};
  }
`;

export const MiddleContainer = styled(Box)`
  position: absolute;
  width: 60rem;
  top: 62%;
  left: 50%;
  transform: translate(-50%, -62%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.pastels.pink};
  border-radius: 1.5rem;
  gap: 2rem;
  padding: 4rem;
  box-shadow: 4px 4px 20px 4px rgba(136, 136, 136, 0.25);
  z-index: 10;
  padding-inline: 6rem;
  text-align: center;
  // ${(props) => props.theme.breakpoints.down('lg')} {
  //   top: 50%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);
  //   max-width: 100%;
  //   padding: 2rem;
  // }
  ${(props) => props.theme.breakpoints.down('lg')} {
    display: none;
  }
`;

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
  padding-block: 4rem;
`;
