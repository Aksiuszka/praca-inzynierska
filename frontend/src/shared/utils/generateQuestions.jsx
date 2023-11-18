import CustomRadioGroup from '../components/RadioGroup/CustomRadioGroup';

export const generateQuestions = (questions) => {
  return questions.map((question, index) => ({
    label: question,
    content: <CustomRadioGroup key={`custom-group-key-${index + 123}`} />,
  }));
};
