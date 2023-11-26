import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Accordeon } from '../../../shared/components/Accordeon/Accordeon';
import { getLabelValues } from '../../../shared/utils/getValuesFromArrOfObjects';
import { GeneratePrescreenSteps } from '../utils/generatePrescreenSteps';
import { GeneratePetTestSteps } from '../utils/generatePetTestSteps';

export const ReviewContainer = () => {
  const { state } = useLocation();

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

  return (
    <div>
      <Typography variant='headline'>Review</Typography>
      <Accordeon data={data} />
    </div>
  );
};
