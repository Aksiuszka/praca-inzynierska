import { Typography, Grid } from '@mui/material';
import { CustomGrid, WrapContainer } from '../../../shared/styles/styles';
import CustomButton from '../../../shared/components/Button';
import Dog from '../../../shared/assets/images/dashboard/user/Dog';

export const UserDashboardContainer = () => {
  return (
    <WrapContainer>
      <CustomGrid color='green'>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant='display' sx={{ color: (theme) => theme.palette.text.primary }}>
            Hej hej Joanna!
          </Typography>
          <br />
          <Typography variant='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi ut aliquip ex ea
            commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi
            ut aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <CustomButton variant='regular' label='explore' sx={{ width: '3rem' }} />
        </Grid>
        <Grid item>
          <Dog />
        </Grid>
      </CustomGrid>
      <Typography variant='highlighted'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Typography>
      <Typography variant='paragraph'>
        Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur
        adipiscing.
      </Typography>
    </WrapContainer>
  );
};
