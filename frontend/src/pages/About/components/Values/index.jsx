// import { useTranslation } from 'react-i18next';
// import keys from '../../../../../locales/keys';
import { Typography } from '@mui/material';
import FlipCard from '../../../../shared/components/FlipCard';
import { MiddleContainer, Wrapper } from '../../style';
import { FlipCardData } from '../../data';

const Values = () => {
  // const { t } = useTranslation();
  return (
    <MiddleContainer>
      <Typography variant='decorated'>Our Values</Typography>
      <Typography variant='regular'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna
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
