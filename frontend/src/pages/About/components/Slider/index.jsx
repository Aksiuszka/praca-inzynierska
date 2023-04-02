import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import keys from '../../../../locales/keys';
import SliderComponent from '../../../../shared/components/Slider';
import CustomButton from '../../../../shared/components/Button';
import { TopContainer } from '../../style';

const Slider = () => {
  const { t } = useTranslation();
  return (
    <TopContainer>
      <Typography variant='decorated'>{t(keys.about.slider.title.one)}</Typography>
      <Typography variant='decorated'>{t(keys.about.slider.title.two)}</Typography>
      <Typography variant='regular' sx={{ paddingInline: '5.5rem' }}>
        {t(keys.about.slider.paragraph)}
      </Typography>
      <SliderComponent variant='about' />
      <br />
      <CustomButton label={t(keys.about.slider.btn)} size='medium' />
    </TopContainer>
  );
};
export default Slider;
