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
        Masz pytanie? Napisz! Chętnie odpowiemy na wszystkie Twoje pytania i wątpliwości.
      </Typography>
      <Stack gap='3rem' direction='row'>
        <Phone />
        <Typography variant='paragraph'> +48 500 00 00 </Typography>
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
