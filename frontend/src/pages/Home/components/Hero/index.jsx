import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import keys from '../../../../locales/keys';
import Main from '../../../../shared/assets/images/main';
import { CustomContainer, AccentTypography, CustomHeroContainer } from '../../style';
import CustomButton from '../../../../shared/components/Button';
import Gear from '../../../../shared/assets/icons/Gear';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <Grid container>
      <CustomHeroContainer item container sm={12} md={6} lg={5}>
        <Typography variant='display'>
          {t(keys.home.hero.main)}
          <AccentTypography> {t(keys.home.hero.mainAccent)}</AccentTypography>
        </Typography>
        <Typography variant='accent' sx={{ margin: '1rem 0 3rem 0' }}>
          {t(keys.home.hero.subtext)}
        </Typography>
        <Link style={{ textDecoration: 'none', color: '#2D2D2D' }} to='/dashboard'>
          <CustomButton
            variant='regular'
            label={t(keys.home.hero.btn)}
            sx={{ fontWeight: 'bolder' }}
            icon={<Gear />}
          />
        </Link>
      </CustomHeroContainer>
      <Grid item md={6} lg={7} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <CustomContainer>
          <Main />
        </CustomContainer>
      </Grid>
    </Grid>
  );
};
export default Hero;
