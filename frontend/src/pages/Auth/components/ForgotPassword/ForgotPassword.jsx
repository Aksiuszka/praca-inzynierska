/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
import { Grid, Typography, Alert } from '@mui/material';
// import { auth } from '../../../../config/firebaseConfig';
import AuthLayout from '../../../../shared/components/AuthLayout';
import LoginPic from '../../../../shared/assets/images/login';
import Heart from '../../../../shared/assets/icons/Heart';
import { PictureContainer, CustomContainer, StyledGrid } from '../../styles';
import Input from '../../../../shared/components/Input';
import { ROUTES } from '../../../../shared/constants';
import { Modal } from '../../../../shared/components/Modal';
import CustomButton from '../../../../shared/components/Button';
import { useResetPasswordMutation } from '../../../../services/auth';

import SocialMedia from '../SocialMedia';
import ForgotPass from '../../../../shared/assets/images/misc/ForgotPassword';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    retypedEmail: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();
  const [resetPassword, { error }] = useResetPasswordMutation();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, retypedEmail } = formData;

    if (email !== retypedEmail) {
      setInvalid(true);
      return;
    }
    try {
      const user = await resetPassword({
        email,
        requestType: 'PASSWORD_RESET',
      }).unwrap();
    } catch (er) {
      console.error(error, er);
    } finally {
      setIsModalOpen(true);
    }
  };

  const handleNavigation = () => {
    navigate(ROUTES.login);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <AuthLayout>
          <Grid container>
            <Grid container item md={7}>
              <ForgotPass />
            </Grid>
            <StyledGrid container item md={5} sx={{ paddingInlineEnd: '3rem' }}>
              <CustomContainer>
                <Typography variant='decorated' style={{ fontSize: '32px' }}>
                  Ooops! Nie znam mojego hasła 😭
                </Typography>
              </CustomContainer>
              {invalid && (
                <Alert severity='error'>
                  <Typography variant='paragraph'>
                    Hasła nie pasują do siebie. Spróbuj ponownie!
                  </Typography>
                </Alert>
              )}
              <Input name='email' onChange={handleChange}>
                Email
              </Input>
              <Input name='retypedEmail' onChange={handleChange}>
                Napisz email ponownie
              </Input>
              <CustomButton variant='regular' label='Reset' size='small' type='submit' />
              <SocialMedia />
            </StyledGrid>
          </Grid>
        </AuthLayout>
      </form>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} variant='login'>
          <Typography variant='headline'>Hurra! 🎉</Typography>
          <Typography variant='paragraph'>Hasło zostało zmienione! 🐧 </Typography>
          <CustomButton variant='regular' label='Wróć do logowania' onClick={handleNavigation} />
        </Modal>
      )}
    </>
  );
};

export default ForgotPassword;
