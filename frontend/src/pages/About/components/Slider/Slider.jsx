import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import keys from '../../../../locales/keys';
import SliderComponent from '../../../../shared/components/Slider';
import CustomButton from '../../../../shared/components/Button';
import { TopContainer } from '../../style';

export const Slider = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/stories');
  };
  return (
    <TopContainer>
      <Typography variant='decorated'>{t(keys.about.slider.title.one)}</Typography>
      <Typography variant='decorated'>{t(keys.about.slider.title.two)}</Typography>
      <Typography variant='paragraph' sx={{ paddingInline: '2.5rem' }}>
        {t(keys.about.slider.paragraph)}
      </Typography>
      <SliderComponent variant='about' />
      <br />
      <CustomButton label={t(keys.about.slider.btn)} onClick={handleClick} />
    </TopContainer>
  );
};
