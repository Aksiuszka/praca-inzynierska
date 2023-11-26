import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../shared/constants';
import keys from '../../../../locales/keys';
import { Stepper } from '../../../../shared/components/Stepper/Stepper';
import { generateQuestions } from '../../../../shared/utils/generateQuestions';

export const StepperForm = ({ category }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const generatePrescreenSteps = () => {
    const prescreenQuestionKeys = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
    ];
    const translatedQuestions = prescreenQuestionKeys.map((key) =>
      t(keys.prescreening.questions[key]),
    );
    return generateQuestions(translatedQuestions);
  };

  const generatePetTestSteps = () => {
    const petTestQuestionKeys = [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
    ];
    const translatedQuestions = petTestQuestionKeys.map((key) => t(keys.petTest.questions[key]));
    return generateQuestions(translatedQuestions);
  };

  const generateSmartTestSteps = () => {
    const testSteps = [
      { label: 'SmartTest Step 1', content: 'Description for Test Step 1' },
      { label: 'Test Step 2', content: 'Description for Test Step 2' },
      { label: 'Test Step 3', content: 'Description for Test Step 3' },
    ];
    return testSteps;
  };

  const renderSteps = (stepperType) => {
    switch (stepperType) {
      case 'prescreen':
        return generatePrescreenSteps();
      case 'smartTest':
        return generateSmartTestSteps();
      case 'petTest':
        return generatePetTestSteps();
      default:
        return [];
    }
  };

  const steps = renderSteps(category);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinalClick = () => {
    navigate(ROUTES.review, { state: { userResponses, category } });
  };

  const handleQuestionResponse = (questionIndex, response) => {
    setUserResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];

      const existingResponse = updatedResponses.find(
        (item) => item.questionIndex === questionIndex,
      );

      if (existingResponse) {
        existingResponse.response = response;
      } else {
        updatedResponses.push({ questionIndex, response });
      }

      return updatedResponses;
    });
  };

  return (
    <Stepper
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      activeStep={activeStep}
      onQuestionResponse={handleQuestionResponse}
      steps={steps}
      onFinalClick={handleFinalClick}
    />
  );
};
