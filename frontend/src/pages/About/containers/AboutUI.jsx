import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import keys from '../../../locales/keys';
import { Slider, Values, Contact } from '../components';
import {
  AccentTypography,
  CustomContainer,
  FlexContainer,
  Title,
  ContentContainer,
} from '../style';

export const AboutUI = () => {
  const { t } = useTranslation();
  return (
    <CustomContainer>
      <Typography variant='display' sx={{ padding: '2rem' }}>
        <AccentTypography>{t(keys.about.hero.mainAccent)} </AccentTypography>
        {t(keys.about.hero.main)}
      </Typography>
      <FlexContainer>
        <Title variant='display' sx={{ fontSize: '2rem', gap: '0' }}>
          {t(keys.about.description.title)}
        </Title>
        <Typography variant='paragraph'>{t(keys.about.description.paragraph)}</Typography>
      </FlexContainer>
      <ContentContainer>
        <Slider />
        <Values />
        <Contact />
      </ContentContainer>
    </CustomContainer>
  );
};
