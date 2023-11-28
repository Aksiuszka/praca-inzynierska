import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../shared/components/Button';
import { Accordeon } from '../../../shared/components/Accordeon/Accordeon';
import { getLabelValues } from '../../../shared/utils/getValuesFromArrOfObjects';
import { GeneratePrescreenSteps } from '../utils/generatePrescreenSteps';
import { GeneratePetTestSteps } from '../utils/generatePetTestSteps';
import { RightButtonContainer } from '../../../shared/styles/styles';
import { ROUTES } from '../../../shared/constants';

export const ReviewContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = useMemo(() => location, [location]);

  const { userResponses, category } = state || {};

  const renderSteps = (stepperType) => {
    switch (stepperType) {
      case 'prescreen':
        return GeneratePrescreenSteps();
      case 'smartTest':
        return GeneratePrescreenSteps();
      case 'petTest':
        return GeneratePetTestSteps();
      default:
        return [];
    }
  };
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

  const generatedSteps = renderSteps(category);
  const labels = getLabelValues(generatedSteps);

  const mapUserResponsesToLabels = () => {
    const mappedQuestions = userResponses.map((response) => {
      const label = labels[response.questionIndex];

      return {
        question: label,
        response: response.response,
      };
    });

    return mappedQuestions;
  };

  const data = mapUserResponsesToLabels();

  const handleSubmit = () => {
    navigate(ROUTES.result, { state: { category } });
  };
  const handleBack = () => {
    renderTest(category);
  };

  return (
    <div>
      <Typography variant='headline'>Review</Typography>
      <Accordeon data={data} />
      <RightButtonContainer>
        <Button variant='regular' label='wynik' onClick={handleSubmit} />
        <Button label='cofnij' onClick={handleBack} />
      </RightButtonContainer>
    </div>
  );
};
