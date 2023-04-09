import { Grid, Typography } from '@mui/material';
import AuthLayout from '../../../../shared/components/AuthLayout';
import Heart from '../../../../shared/assets/icons/Heart';
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import { CustomContainer } from '../../styles';
import Albo from '../../../../shared/assets/svg/Albo';
import CustomButton from '../../../../shared/components/Button';
import Google from '../../../../shared/assets/icons/Google';

const Signup = () => {
  return (
    <AuthLayout>
      <CustomContainer>
        <Typography variant='decorated'>Witaj w fluff</Typography>
        <Heart />
      </CustomContainer>
      <CustomContainer>
        <Grid container item sm={12} md={6} sx={{ gap: '4rem', flexDirection: 'column' }}>
          <Input>Username</Input>
          <Input>Email</Input>
        </Grid>
        <Grid container item sm={12} md={6} sx={{ gap: '4rem', flexDirection: 'column' }}>
          <Input>Password</Input>
          <Input>Retype Password</Input>
        </Grid>
      </CustomContainer>
      <Button variant='regular' label='Zarejestruj się' />
      <Albo />
      <CustomButton variant='socialmedia' icon={<Google />} label='Zaloguj się przez Google' />
    </AuthLayout>
  );
};

export default Signup;
