import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';
import { Typography, Grid } from '@mui/material';

export const CustomContainer = styled('div')`
  && {
    width: 39rem;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    margin: 0;
  }
`;
export const FlexContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
  align-items: start;
`;
export const AccentTypography = styled('span')`
  color: ${(props) => props.theme.palette.text.accent};
`;
export const Line = styled('hr')`
  color: #ffe8bc;
  background-color: #ffe8bc;
  height: 0.2rem;
  width: 100%;
  border-color: #ffe8bc;
  border-style: none;
`;
export const CTAContainer = styled(Container)`
  max-width: 100%;
  margin-inline: auto;
  margin-block: 3rem;
  padding: 3rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: ${(props) => props.theme.palette.pastels.pink};
  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: 40rem;
    padding: 1rem;
  }
`;
export const CustomGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 2rem;
  padding-inline: 4.5rem;
  ${(props) => props.theme.breakpoints.down('md')} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-inline: 0rem;
  }
`;
export const StyledTypography = styled(Typography)`
  text-align: end;
`;
export const StyledHeadline = styled(Typography)`
alignSelf: center,
textAlign: center,
`;
export const CustomHeadlineContainer = styled('div')`
  width: 100%;
  display: flex;
  margin-block: 2rem;
  margin-inline-start: 5rem;
  ${(props) => props.theme.breakpoints.down('md')} {
    display: flex;
    margin-inline-start: 0rem;
    padding-inline-start: 1.5rem;
  }
`;
export const CustomHeroContainer = styled(Grid)`
  && {
    z-index: 5;
    ${(props) => props.theme.breakpoints.down('md')} {
      margin-inline: auto;
      max-width: 100%;
      display: flex;
    }
  }
`;
