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

export const SharpBox = styled('div')`
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    switch (props.color) {
      case 'blue':
        return '#EAEFFF';
      case 'red':
        return '#FFF0F5';
      case 'green':
        return '#F0FFF6';
      case 'yellow':
        return '#FFF7F1';
      default:
        return 'transparent'; // or provide a default color
    }
  }};
  padding: 2.3rem;
  margin: 1rem;
`;

export const SliderContainer = styled(Container)`
margin: 0,
width: '100%',
`;
