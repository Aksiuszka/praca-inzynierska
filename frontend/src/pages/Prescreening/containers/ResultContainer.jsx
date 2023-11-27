import { useNavigate } from 'react-router-dom';
import { ColumnContainer, RightButtonContainer } from '../../../shared/styles/styles';
import FlegmaticPet from '../../../shared/assets/images/results/petTest/Flegmatic';
import Button from '../../../shared/components/Button';
import SliderComponent from '../../../shared/components/Slider';
import { getPetTestResultInfo } from '../utils/getPetTestResultInfo';
import { ROUTES } from '../../../shared/constants';

export const ResultContainer = () => {
  const navigate = useNavigate();
  const result = 'melancholic';

  const { data, color } = getPetTestResultInfo(result);

  const renderTest = (type) => {
    switch (type) {
      case 'prescreen':
        return navigate(ROUTES.prescreening);
      case 'smartTest':
        return navigate(ROUTES.smartTest);
      case 'petTest':
        return navigate(ROUTES.petTest);
      default:
        return navigate(ROUTES.dashboard);
    }
  };
  const handleSubmit = () => {
    navigate(ROUTES.dashboard);
  };
  const handleBack = () => {
    renderTest('petTest');
  };
  return (
    <ColumnContainer>
      <FlegmaticPet />
      <SliderComponent variant='petTest' information={data} color={color} />
      <RightButtonContainer>
        <Button variant='regular' label='Twoje wyniki' onClick={handleSubmit} />
        <Button label='cofnij' onClick={handleBack} />
      </RightButtonContainer>
    </ColumnContainer>
  );
};
