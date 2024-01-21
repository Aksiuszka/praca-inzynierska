// import { useTranslation } from 'react-i18next';
// import keys from '../../../../../locales/keys';
import { Typography } from '@mui/material';
import FlipCard from '../../../../shared/components/FlipCard';
import { MiddleContainer, Wrapper } from '../../style';
import { FlipCardData } from '../../data';

export const Values = () => {
  // const { t } = useTranslation();
  return (
    <MiddleContainer>
      <Typography variant='decorated'>Our Values</Typography>
      <Typography variant='regular'>
        Nasze wartości są fundamentem, na którym budujemy naszą markę i podejście do świata. To one
        kierują naszym codziennym działaniem i stanowią solidną bazę dla każdego aspektu naszej
        działalności.
      </Typography>
      <Wrapper>
        {FlipCardData.map((item) => (
          <FlipCard key={item.id} picture={item.picture} text={item.text} />
        ))}
      </Wrapper>
    </MiddleContainer>
  );
};
export default Values;
