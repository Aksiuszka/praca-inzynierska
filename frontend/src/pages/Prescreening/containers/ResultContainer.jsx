import { useLocation } from 'react-router-dom';
import { ColumnContainer } from '../../../shared/styles/styles';
import FlegmaticPet from '../../../shared/assets/images/results/petTest/Flegmatic';
import SliderComponent from '../../../shared/components/Slider';

export const melancholicData = [
  {
    id: 1,
    content: 'kurw!!!a',
  },
  {
    id: 2,
    content: 'mac!!!!',
  },
  {
    id: 3,
    content: 'co za',
  },
  {
    id: 4,
    content: 'kurwa dzien!!!!!!!!!!',
  },
];

export const ResultContainer = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <ColumnContainer>
      <FlegmaticPet />
      <SliderComponent variant='petTest' information={melancholicData} />
    </ColumnContainer>
  );
};
