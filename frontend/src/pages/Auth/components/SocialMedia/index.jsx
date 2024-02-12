import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Stack, Typography, Box } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
// import { doc, setDoc } from 'firebase/firestore';
import { auth, provider } from '../../../../config/firebase';
import Albo from '../../../../shared/assets/svg/Albo';
import CustomButton from '../../../../shared/components/Button';
import Google from '../../../../shared/assets/icons/Google';
import { setCredentials } from '../../../../slices/authSlice';

const SocialMedia = () => {
  const [value, setValue] = useState({
    email: '',
    token: '',
    username: '',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      const updatedValue = {
        email: data.user.email,
        token: data.user.stsTokenManager.refreshToken,
        username: data.user.displayName,
      };
      setValue(updatedValue);
      localStorage.setItem('user', data.user);
    });
  };

  useEffect(() => {
    if (value.email && value.token && value.username) {
      // setDoc(doc(db, 'users', value.email), {
      //   email: value.email,
      //   role: 'subscriber',
      // });
      dispatch(setCredentials(value));
      navigate('/');
    }
  }, [dispatch, value.email, value.token, value.username, value]);

  const handleNavigation = () => {
    navigate('/reset-password');
  };
  return (
    <Stack sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
      <Box
        sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', width: '100%' }}
        onClick={handleNavigation}
      >
        <Typography variant='paragraph'>Zapomniałeś hasła?</Typography>
      </Box>
      <Albo />
      <CustomButton
        variant='socialmedia'
        icon={<Google />}
        label='Zaloguj się przez Google'
        onClick={handleClick}
      />
    </Stack>
  );
};

export default SocialMedia;
