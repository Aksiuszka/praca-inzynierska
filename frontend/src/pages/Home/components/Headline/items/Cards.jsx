import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../../locales/keys';
import CardsCat from '../../../../../shared/assets/images/headlines/Cat';
import { AccentTypography, StyledHeadline } from '../../../style';

const CardsHeadline = () => {
  const { t } = useTranslation();
  return (
    <Grid container sx={{ marginBlock: '5rem', width: '100%' }}>
      <Grid
        item
        container
        lg={3}
        sx={{ margin: '-5rem', display: { xs: 'none', sm: 'none', md: 'block' } }}
      >
        <CardsCat />
      </Grid>
      <Grid item container lg={9}>
        <StyledHeadline variant='decorated'>
          {t(keys.home.headline.hero)}
          <AccentTypography> {t(keys.home.headline.heroAccent)} </AccentTypography>
        </StyledHeadline>
      </Grid>
    </Grid>
  );
};
export default CardsHeadline;
