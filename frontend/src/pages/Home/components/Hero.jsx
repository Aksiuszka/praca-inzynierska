import { Grid, Typography } from '@mui/material';
import Main from '../../../shared/assets/images/main';
import { CustomContainer, AccentTypography } from '../style';
import CustomButton from '../../../shared/components/Button';
import Gear from '../../../shared/assets/icons/Gear';

const Hero = () => {
  return (
    <Grid container>
      <Grid item container sx={{ zIndex: '5' }} sm={12} md={6} lg={5}>
        <Typography variant='display'>
          Get Yourself
          <AccentTypography> A Friend</AccentTypography>
        </Typography>
        <Typography variant='accent' sx={{ margin: '1rem 0 3rem 0' }}>
          Subtext concerning the app
        </Typography>
        <CustomButton
          variant='regular'
          label='start the process'
          sx={{ fontWeight: 'bolder' }}
          icon={<Gear />}
        />
      </Grid>
      <Grid item md={6} lg={7} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
        <CustomContainer>
          <Main />
        </CustomContainer>
      </Grid>
    </Grid>
  );
};
export default Hero;
