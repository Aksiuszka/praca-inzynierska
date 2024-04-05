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
import { GenerateSmartTestSteps } from '../utils/generateSmartTestSteps';
import { RightButtonContainer } from '../../../shared/styles/styles';
import { ROUTES } from '../../../shared/constants';
import { db } from '../../../config/firebase';
import { calculatePetTemperament } from '../utils/calculatePetTemperament';
import { calculateSmartTestResult } from '../utils/calculateSmartTestTemperament';
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

  const calculateResults = (type) => {
    switch (type) {
      case 'petTest':
        return calculatePetTemperament(userResponses, TEMPERAMENT_MAPPING);
      case 'prescreen':
        return calculateAdoptionReadiness(userResponses, POINTS_MAP, THRESHOLDS);
      case 'smartTest':
        return calculateSmartTestResult(userResponses);
      default:
        return null;
    }
  };

  const renderSteps = (stepperType) => {
    switch (stepperType) {
      case 'prescreen':
        return GeneratePrescreenSteps();
      case 'smartTest':
        return GenerateSmartTestSteps();
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
        updateDoc(userRef, {
          smartTest: testResults,
        });
        break;
      default:
        return null;
    }
    return null;
  };

  const generatedSteps = renderSteps(category);
  const labels = getLabelValues(generatedSteps);

  const mapUserResponsesToLabels = (testcategory) => {
    const mappedQuestions = userResponses.map((response) => {
      const label = labels[response.questionIndex];
      if (testcategory === 'smartTest') {
        return {
          question: response.response,
          response: '',
        };
      }
      return {
        question: label,
        response: response.response,
      };
    });

    return mappedQuestions;
  };

  const data = mapUserResponsesToLabels(category);

  const handleSubmit = () => {
    submitResults(category);
    navigate(ROUTES.result, { state: { category, testResults } });
  };
  const handleBack = () => {
    renderTest(category);
  };

  return (
    <div>
      <Typography variant='headline'>Podsumowanie</Typography>
      <Accordeon data={data} />
      <RightButtonContainer>
        <Button variant='regular' label='wynik' onClick={handleSubmit} />
        <Button label='cofnij' onClick={handleBack} />
      </RightButtonContainer>
    </div>
  );
};
