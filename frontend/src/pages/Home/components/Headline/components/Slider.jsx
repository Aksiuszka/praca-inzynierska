import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../../locales/keys';
import SliderCat from '../../../../../shared/assets/images/headlines/Cat2';
import { AccentTypography, StyledHeadline } from '../../../style';

const SliderHeadline = () => {
  const { t } = useTranslation();
  return (
    <Grid
      display='flex'
      sx={{
        marginBlock: '5rem',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Grid
        item
        container
        lg={3}
        sx={{
          margin: '-8rem',
          display: { xs: 'none', sm: 'none', md: 'block' },
        }}
      >
        <SliderCat />
      </Grid>
      <Grid
        item
        lg={9}
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <StyledHeadline variant='decorated'>
          {t(keys.home.headline.slider)}{' '}
          <AccentTypography> {t(keys.home.headline.sliderAccent)} </AccentTypography>
        </StyledHeadline>
      </Grid>
    </Grid>
  );
};
export default SliderHeadline;
