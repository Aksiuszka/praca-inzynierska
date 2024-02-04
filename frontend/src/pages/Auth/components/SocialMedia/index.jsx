import { Stack, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Albo from '../../../../shared/assets/svg/Albo';
import CustomButton from '../../../../shared/components/Button';
import Google from '../../../../shared/assets/icons/Google';

const SocialMedia = () => {
  const navigate = useNavigate();
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
      <CustomButton variant='socialmedia' icon={<Google />} label='Zaloguj się przez Google' />
    </Stack>
  );
};

export default SocialMedia;
