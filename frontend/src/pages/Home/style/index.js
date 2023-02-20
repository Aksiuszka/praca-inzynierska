import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

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
export const ImageContainer = styled('div')`
  && {
    width: 15rem;
    position: absolute;
    top: 0;
    left: 35%;
    transform: translate(0, -35%);
    z-index: 2;
  }
`;
export const Card = styled(Container)`
  width: 20.4rem;
  height: 21.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  border-radius: 2rem;
  padding: 1.5rem;
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
