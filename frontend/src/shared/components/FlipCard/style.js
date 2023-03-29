import { styled } from '@mui/material/styles';

export const StyledCard = styled('div')`
  background-color: transparent;
  width: 12rem;
  height: 12rem;
  perspective: 1000px;
  transition: transform 0.9s;
  transform-style: preserve-3d;
  transform: rotateY(0);
  :hover {
    transform: rotateY(-180deg);
  }
  ${(props) => props.theme.breakpoints.down('lg')} {
    max-width: 9rem;
    height: 9rem;
  }
`;

export const CardInner = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
`;

export const CardFront = styled('div')`
  background: ${(props) => props.theme.palette.background.default};
  border: 3px solid ${(props) => props.theme.palette.text.accent};
  border-radius: 1.5rem;
  height: 100%;
  width: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBack = styled('div')`
  background: ${(props) => props.theme.palette.background.default};
  border: 3px solid ${(props) => props.theme.palette.text.accent};
  border-radius: 1.5rem;
  color: ${(props) => props.theme.palette.text.primary};
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
