/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { Grid, Typography } from '@mui/material';
// import { auth } from '../../../../config/firebaseConfig';
import AuthLayout from '../../../../shared/components/AuthLayout';
import LoginPic from '../../../../shared/assets/images/login';
import Heart from '../../../../shared/assets/icons/Heart';
import { PictureContainer, CustomContainer, StyledGrid } from '../../styles';
import Input from '../../../../shared/components/Input';
import { ROUTES } from '../../../../shared/constants';
import CustomButton from '../../../../shared/components/Button';
import { useLoginMutation } from '../../../../services/auth';

import SocialMedia from '../SocialMedia';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [login, { error }] = useLoginMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await login({
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      }).unwrap();
      navigate(ROUTES.root);
    } catch (er) {
      console.error(error, er);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, formData.email, formData.password)
  //     .then((userCredential) => {
  //       const { user } = userCredential;
  //       navigate(ROUTES.root);
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };
  return (
    <form onSubmit={handleLogin}>
      <AuthLayout>
        <Grid container>
          <Grid container item md={6}>
            <PictureContainer>
              <LoginPic width='102%' />
            </PictureContainer>
          </Grid>
          <StyledGrid container item md={6} sx={{ paddingInlineEnd: '3rem' }}>
            <CustomContainer>
              <Typography variant='decorated' style={{ fontSize: '28px' }}>
                Witaj ponownie
              </Typography>
              <Heart />
            </CustomContainer>
            <Input name='email' onChange={handleChange}>
              Email
            </Input>
            <Input name='password' onChange={handleChange}>
              Password
            </Input>
            <CustomButton variant='regular' label='Zaloguj' size='small' type='submit' />
            <SocialMedia />
          </StyledGrid>
        </Grid>
      </AuthLayout>
    </form>
  );
};

export default Login;
