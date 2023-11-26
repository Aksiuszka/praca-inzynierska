import { useTranslation } from 'react-i18next';
import keys from '../../../locales/keys';
import { generateQuestions } from '../../../shared/utils/generateQuestions';

export const GeneratePrescreenSteps = () => {
  const { t } = useTranslation();

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
