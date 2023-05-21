import { Grid, Typography } from '@mui/material';
import LoginPic from '../../../../shared/assets/images/login';
import Heart from '../../../../shared/assets/icons/Heart';
import { PictureContainer, CustomContainer, StyledGrid } from '../../styles';
import Input from '../../../../shared/components/Input';

import CustomButton from '../../../../shared/components/Button';

import SocialMedia from '../SocialMedia';

const Login = () => {
  return (
    <Grid container>
      <Grid container item md={8}>
        <PictureContainer>
          <LoginPic width='112%' />
        </PictureContainer>
      </Grid>
      <StyledGrid container item md={4}>
        <CustomContainer>
          <Typography variant='decorated' style={{ fontSize: '32px' }}>
            Witaj ponownie
          </Typography>
          <Heart />
        </CustomContainer>
        <Input>Email</Input>
        <Input>Password</Input>
        <CustomButton variant='regular' label='Zaloguj się' size='small' />
        <SocialMedia />
      </StyledGrid>
    </Grid>
  );
};

export default Login;
