import { Stack } from '@mui/material';
import Albo from '../../../../shared/assets/svg/Albo';
import CustomButton from '../../../../shared/components/Button';
import Google from '../../../../shared/assets/icons/Google';

const SocialMedia = () => {
  return (
    <Stack sx={{ display: 'flex', alignItems: 'center' }}>
      <Albo />
      <CustomButton variant='socialmedia' icon={<Google />} label='Zaloguj się przez Google' />
    </Stack>
  );
};

export default SocialMedia;
