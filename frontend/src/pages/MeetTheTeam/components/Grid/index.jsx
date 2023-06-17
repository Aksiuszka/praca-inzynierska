import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../locales/keys';
import Ania from '../../../../shared/assets/images/team/ania.jpg';
import Asia from '../../../../shared/assets/images/team/asia.png';

const GridElement = () => {
  const { t } = useTranslation();
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      sx={{ marginBlock: '5rem', width: '100%' }}
    >
      <Grid item justifyContent='center' direction='column'>
        <img src={Ania} alt='foto' />
        <Typography>{t(keys.meettheteam.fe.name)}</Typography>
        <Typography>{t(keys.meettheteam.fe.position)}</Typography>
        <Typography>Linki</Typography>
      </Grid>
      <Grid item justifyContent='center' alignItems='center' direction='column'>
        <img src={Asia} alt='foto' />
        <Typography>{t(keys.meettheteam.be.name)}</Typography>
        <Typography>{t(keys.meettheteam.be.position)}</Typography>
        <Typography>Linki</Typography>
      </Grid>
    </Grid>
  );
};
export default GridElement;
