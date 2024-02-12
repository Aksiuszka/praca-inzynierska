/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Grid, Typography, Alert } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db, auth, provider } from '../../../../config/firebase';
import AuthLayout from '../../../../shared/components/AuthLayout';
import Heart from '../../../../shared/assets/icons/Heart';
import Input from '../../../../shared/components/Input';
import Button from '../../../../shared/components/Button';
import { CustomContainer } from '../../styles';
import Albo from '../../../../shared/assets/svg/Albo';
import CustomButton from '../../../../shared/components/Button';
import Google from '../../../../shared/assets/icons/Google';
import { Modal } from '../../../../shared/components/Modal';
import { ROUTES } from '../../../../shared/constants';
import { useSignupMutation } from '../../../../services/auth';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    retypedPassword: '',
    token: '',
    photoUrl: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();
  const [signup, { error }] = useSignupMutation();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNavigation = () => {
    navigate(ROUTES.login);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { password, retypedPassword } = formData;

    if (password !== retypedPassword) {
      setInvalid(true);
      return;
    }
    try {
      const user = await signup({
        email: formData.email,
        password: formData.password,
        returnSecureToken: true,
      }).unwrap();
      if (user) {
        setFormData((prevData) => ({
          email: user.email,
          token: user.refreshToken,
          photoUrl: user.photoUrl,
        }));
      }
    } catch (er) {
      console.error(error, er);
    } finally {
      localStorage.setItem('userData', JSON.stringify(Object.values(formData)));
      setIsModalOpen(true);
    }
  };

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const updatedValue = {
        email: data.user.email,
        token: data.user.stsTokenManager.refreshToken,
        username: data.user.displayName,
      };
      setFormData(updatedValue);
      localStorage.setItem('user', data.user);
    });
  };

  useEffect(() => {
    if (formData.email && formData.token) {
      setDoc(doc(db, 'users', formData.email), {
        email: formData.email,
        role: 'subscriber',
      });
      navigate('/login');
    }
  }, [formData.email, formData.token, navigate]);

  return (
    <>
      <form onSubmit={handleSignup}>
        <AuthLayout>
          <CustomContainer>
            <Typography variant='decorated'>Witaj w fluff</Typography>
            <Heart />
          </CustomContainer>
          {invalid && (
            <Alert severity='error'>
              <Typography variant='paragraph'>
                Hasła nie pasują do siebie. Spróbuj ponownie!.
              </Typography>
            </Alert>
          )}
          <CustomContainer>
            <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
              <Input sx={{ width: '23rem' }} name='username' onChange={handleChange}>
                Username
              </Input>
              <Input sx={{ width: '23rem' }} name='email' onChange={handleChange}>
                Email
              </Input>
            </Grid>
            <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
              <Input
                sx={{ width: '23rem' }}
                name='password'
                onChange={handleChange}
                type='password'
              >
                Password
              </Input>
              <Input
                sx={{ width: '23rem' }}
                name='retypedPassword'
                onChange={handleChange}
                type='password'
              >
                Retype Password
              </Input>
            </Grid>
          </CustomContainer>
          <Button variant='regular' label='Zarejestruj się' type='submit' />
          <Albo />
          <CustomButton
            variant='socialmedia'
            icon={<Google />}
            label='Zaloguj się przez Google'
            onClick={handleClick}
          />
        </AuthLayout>
      </form>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} variant='login'>
          <Typography variant='headline'>Hurra! 🎉</Typography>
          <Typography variant='paragraph'>
            Konto zostało założone.🐧 Chcesz się zalogować? Klikaj! ✨
          </Typography>
          <Button variant='regular' label='Zaloguj się' onClick={handleNavigation} />
        </Modal>
      )}
    </>
  );
};

export default Signup;
