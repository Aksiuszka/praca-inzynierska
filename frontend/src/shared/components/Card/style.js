import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

export const ImageContainer = styled('div')`
  && {
    width: 15rem;
    position: absolute;
    top: 0;
    left: 35%;
    transform: translate(0, -35%);
    z-index: 2;
    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 10.4rem;
    }
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
  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 17.4rem;
    height: 17.4rem;
    padding: 1rem;
  }
`;
