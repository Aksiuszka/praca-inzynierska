import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import keys from '../../../locales/keys';
import { AccentTypography, CustomContainer, FlexContainer, Title } from '../style';
import Content from './Content';

const AboutUI = () => {
  const { t } = useTranslation();
  return (
    <CustomContainer>
      <Typography variant='display'>
        <AccentTypography>{t(keys.about.hero.mainAccent)} </AccentTypography>
        {t(keys.about.hero.main)}
      </Typography>
      <FlexContainer>
        <Title variant='display' sx={{ fontSize: '2rem', gap: '0' }}>
          {t(keys.about.description.title)}
        </Title>
        <Typography variant='paragraph'>{t(keys.about.description.paragraph)}</Typography>
        <Typography variant='paragraph'>{t(keys.about.description.paragraph)}</Typography>
      </FlexContainer>
      <Content />
    </CustomContainer>
  );
};
export default AboutUI;
