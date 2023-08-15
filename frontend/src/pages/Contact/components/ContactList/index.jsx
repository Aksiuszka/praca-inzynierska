import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import Phone from '../../../../shared/assets/icons/Phone';
import Mail from '../../../../shared/assets/icons/Mail';
import Location from '../../../../shared/assets/icons/Location';

const ContactList = () => {
  return (
    <Stack gap='2rem' width='100%'>
      <Typography variant='decoratedSmall'>info kontaktowe</Typography>
      <Typography variant='paragraph'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{' '}
      </Typography>
      <Stack gap='3rem' direction='row'>
        <Phone />
        <Typography variant='paragraph'> 1223425456456575 </Typography>
      </Stack>
      <Stack gap='3rem' direction='row'>
        <Mail />
        <Typography variant='paragraph'> abcdrfhsk@wp.pl </Typography>
      </Stack>
      <Stack gap='3rem' direction='row'>
        <Location />
        <Typography variant='paragraph'>Płock </Typography>
      </Stack>
    </Stack>
  );
};
export default ContactList;
