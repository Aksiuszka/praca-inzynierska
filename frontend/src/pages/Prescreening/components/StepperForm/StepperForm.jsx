/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../../shared/constants';
import keys from '../../../../locales/keys';
import { Stepper } from '../../../../shared/components/Stepper/Stepper';
import { generateQuestions } from '../../../../shared/utils/generateQuestions';
import { SMART_TEST_QUESTION } from '../../constants/smartTest';

export const StepperForm = ({ category }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [selectedValues, setSelectedValues] = useState({});
  console.log(category, 'nowe');

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
      { label: 'Wybierz cechę charakteru, która najbardziej do Ciebie pasuje. Część 1.' },
      { label: 'Wybierz cechę charakteru, która najbardziej do Ciebie pasuje. Część 2.' },
      { label: 'Wybierz cechę charakteru, która najbardziej do Ciebie pasuje. Część 3.' },
      { label: 'Wybierz cechę charakteru, która najbardziej do Ciebie pasuje. Część 4.' },
      { label: 'Wybierz cechę charakteru, która najbardziej do Ciebie pasuje. Część 5.' },
      { label: 'Wybierz cechę charakteru, która najbardziej do Ciebie pasuje. Część 6.' },
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

  const handleSmartTestRadioChange = (questionNumber, value) => {
    setSelectedValues({
      ...selectedValues,
      [questionNumber]: value,
    });

    // Update userResponses with the selected answer
    const updatedResponses = [...userResponses];
    const existingResponseIndex = updatedResponses.findIndex(
      (item) => item.questionIndex === questionNumber,
    );

    if (existingResponseIndex !== -1) {
      // If response for this question already exists, update it
      updatedResponses[existingResponseIndex].response = value;
    } else {
      // If response for this question doesn't exist, add it to userResponses
      updatedResponses.push({ questionIndex: questionNumber, response: value });
    }

    setUserResponses(updatedResponses);
  };

  const renderSmartTestQuestions = () => {
    const questionsPerStep = 2; // Set the number of questions per step
    const startQuestion = activeStep * questionsPerStep + 1;
    const endQuestion = Math.min(startQuestion + questionsPerStep - 1, SMART_TEST_QUESTION.length);

    return SMART_TEST_QUESTION.slice(startQuestion - 1, endQuestion).map((question, index) => {
      const questionNumber = Object.keys(question)[0];
      const options = question[questionNumber];

      return (
        <div
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            padding: '1rem',
            height: '3rem',
          }}
        >
          {options.map((option, i) => (
            <Fragment key={i}>
              <label
                style={{
                  marginBottom: '1rem',
                  fontFamily: 'Poppins',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
                <input
                  type='radio'
                  name={`question_${questionNumber}`}
                  value={option}
                  checked={selectedValues[questionNumber] === option}
                  onChange={() => handleSmartTestRadioChange(questionNumber, option)}
                />
                {option}
              </label>
            </Fragment>
          ))}
        </div>
      );
    });
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
      category={category}
      renderSmartTestQuestions={renderSmartTestQuestions}
    />
  );
};
