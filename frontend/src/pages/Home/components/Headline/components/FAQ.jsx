import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../../locales/keys';
import FaqDog from '../../../../../shared/assets/images/headlines/Dog';
import { AccentTypography, StyledHeadline, CustomHeadlineContainer } from '../../../style';

const FAQHeadline = () => {
  const { t } = useTranslation();
  return (
    <CustomHeadlineContainer>
      <Grid
        sx={{
          display: 'flex',
        }}
        item
        lg={9}
      >
        <StyledHeadline variant='decorated'>
          {t(keys.home.headline.faq)}
          <AccentTypography> {t(keys.home.headline.faqAccent)} </AccentTypography>
        </StyledHeadline>
      </Grid>
      <Grid
        item
        lg={3}
        sx={{
          display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
        }}
      >
        <FaqDog width='100%' />
      </Grid>
    </CustomHeadlineContainer>
  );
};
export default FAQHeadline;
