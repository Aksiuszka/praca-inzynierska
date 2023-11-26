import { useTranslation } from 'react-i18next';
import keys from '../../../locales/keys';
import { generateQuestions } from '../../../shared/utils/generateQuestions';

export const GeneratePetTestSteps = () => {
  const { t } = useTranslation();

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
