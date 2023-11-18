import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../shared/constants';
import keys from '../../../../locales/keys';
import { Stepper } from '../../../../shared/components/Stepper';
import { generateQuestions } from '../../../../shared/utils/generateQuestions';

export const StepperForm = ({ category }) => {
  const [activeStep, setActiveStep] = useState(0);
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

  const generateTestSteps = () => {
    const testSteps = [
      { label: 'Test Step 1', content: 'Description for Test Step 1' },
      { label: 'Test Step 2', content: 'Description for Test Step 2' },
      { label: 'Test Step 3', content: 'Description for Test Step 3' },
    ];
    return testSteps;
  };

  const renderSteps = (stepperType = 'prescreen') => {
    switch (stepperType) {
      case 'prescreen':
        return generatePrescreenSteps();
      case 'test':
        return generateTestSteps();
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
    navigate(ROUTES.review);
  };

  return (
    <Stepper
      onBack={handleBack}
      onNext={handleNext}
      maxSteps={maxSteps}
      activeStep={activeStep}
      steps={steps}
      onFinalClick={handleFinalClick}
    />
  );
};
