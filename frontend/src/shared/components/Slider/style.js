import { styled } from '@mui/material/styles';
import { Container } from '@mui/system';

export const CustomContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CustomBox = styled('div')`
  width: 23rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.transparency === 'true' ? 'transparent' : '#f4e6eb')};
  padding: 1.3rem;
  margin: 1rem;
  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 20rem;
    margin: 0.5rem;
    max-width: 18rem;
  }
`;

export const SliderContainer = styled(Container)`
margin: 0,
width: '100%',
`;
