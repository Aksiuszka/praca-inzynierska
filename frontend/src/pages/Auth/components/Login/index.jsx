import { Grid, Typography } from '@mui/material';
import AuthLayout from '../../../../shared/components/AuthLayout';
import LoginPic from '../../../../shared/assets/images/login';
import Heart from '../../../../shared/assets/icons/Heart';
import { PictureContainer, CustomContainer, StyledGrid } from '../../styles';
import Input from '../../../../shared/components/Input';

import CustomButton from '../../../../shared/components/Button';

import SocialMedia from '../SocialMedia';

const Login = () => {
  return (
    <AuthLayout>
      <Grid container>
        <Grid container item md={7}>
          <PictureContainer>
            <LoginPic width='112%' />
          </PictureContainer>
        </Grid>
        <StyledGrid container item md={5} sx={{ paddingInlineEnd: '3rem' }}>
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
    </AuthLayout>
  );
};

export default Login;
