import { useState } from 'react';
import { TestPageLayout } from '../../../shared/components/Layouts';
// import { StepperForm } from '../components/StepperForm/StepperForm';
import { SMART_TEST_QUESTION } from '../constants/smartTest';

export const SmartTestContainer = () => {
  const [selectedValues, setSelectedValues] = useState({});

  const handleRadioChange = (questionNumber, value) => {
    setSelectedValues({
      ...selectedValues,
      [questionNumber]: value,
    });
  };
  return (
    <TestPageLayout title='SmartTest'>
      <div>
        {SMART_TEST_QUESTION.map((question, index) => {
          const questionNumber = Object.keys(question)[0];
          const options = question[questionNumber];

          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <p>Question {questionNumber}:</p>
              {options.map((option, i) => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control, react/no-array-index-key
                <label key={i}>
                  <input
                    type='radio'
                    name={`question_${questionNumber}`}
                    value={option}
                    checked={selectedValues[questionNumber] === option}
                    onChange={() => handleRadioChange(questionNumber, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          );
        })}
      </div>
    </TestPageLayout>
  );
};
