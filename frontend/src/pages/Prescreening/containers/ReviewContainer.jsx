import { useMemo } from 'react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { doc, updateDoc } from 'firebase/firestore';
import Button from '../../../shared/components/Button';
import { Accordeon } from '../../../shared/components/Accordeon/Accordeon';
import { getLabelValues } from '../../../shared/utils/getValuesFromArrOfObjects';
import { GeneratePrescreenSteps } from '../utils/generatePrescreenSteps';
import { GeneratePetTestSteps } from '../utils/generatePetTestSteps';
import { RightButtonContainer } from '../../../shared/styles/styles';
import { ROUTES } from '../../../shared/constants';
import { db } from '../../../config/firebase';
import { calculateTemperament } from '../utils/calculatePetTemperament';
import { TEMPERAMENT_MAPPING } from '../constants/petTest';
import { POINTS_MAP, THRESHOLDS } from '../constants/prescreening';
import { calculateAdoptionReadiness } from '../utils/calculatePrescreenReadiness';

export const ReviewContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = useMemo(() => location, [location]);
  const user = useSelector((data) => data.auth);
  const userRef = doc(db, 'users', user.email);

  const { userResponses, category } = state || {};
  const petTestResult = calculateTemperament(userResponses, TEMPERAMENT_MAPPING);
  console.log(petTestResult, 'pet test res');
  console.log(userResponses, 'answer');

  const calculateResults = (type) => {
    switch (type) {
      case 'petTest':
        return calculateTemperament(userResponses, TEMPERAMENT_MAPPING);
      case 'prescreen':
        return calculateAdoptionReadiness(userResponses, POINTS_MAP, THRESHOLDS);
      default:
        return null;
    }
  };

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
  const testResults = calculateResults(category);

  const submitResults = (type) => {
    switch (type) {
      case 'prescreen':
        updateDoc(userRef, {
          prescreening: testResults,
        });
        break;
      case 'smartTest':
        break;
      default:
        return null;
    }
    return null;
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
    submitResults(category);
    navigate(ROUTES.result, { state: { category, testResults } });
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
