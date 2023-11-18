import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Accordeon } from '../../../shared/components/Accordeon/Accordeon';
import keys from '../../../locales/keys';
import { generateQuestions } from '../../../shared/utils/generateQuestions';
import { getLabelValues } from '../../../shared/utils/getValuesFromArrOfObjects';

export const ReviewContainer = () => {
  const { t } = useTranslation();

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
      'fourteen',
    ];
    const translatedQuestions = prescreenQuestionKeys.map((key) =>
      t(keys.prescreening.questions[key]),
    );
    return generateQuestions(translatedQuestions);
  };
  const generatedSteps = generatePrescreenSteps();
  const labels = getLabelValues(generatedSteps);

  return (
    <div>
      <Typography variant='headline'>Review</Typography>
      <Accordeon data={labels} />
    </div>
  );
};
