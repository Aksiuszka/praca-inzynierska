import { useState } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../../../config/firebase';
import Albo from '../../../../shared/assets/svg/Albo';
import CustomButton from '../../../../shared/components/Button';
import Google from '../../../../shared/assets/icons/Google';

const SocialMedia = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
    if (value) {
      navigate('/');
    }
  };

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
