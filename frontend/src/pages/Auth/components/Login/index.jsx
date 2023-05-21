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
      <Grid container item md={6}>
        <PictureContainer>
          <LoginPic width='100%' />
        </PictureContainer>
      </Grid>
      <StyledGrid container item md={6}>
        <CustomContainer>
          <Typography variant='decorated'>Witaj ponownie</Typography>
          <Heart />
        </CustomContainer>
        <Input>Username</Input>
        <Input>Email</Input>
        <CustomButton variant='regular' label='Zarejestruj się' />
        <SocialMedia />
      </StyledGrid>
    </Grid>
  );
};

export default Login;
