import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../locales/keys';
import Ania from '../../../../shared/assets/images/team/ania.jpg';
import Asia from '../../../../shared/assets/images/team/asia.png';
import { SOCIALMEDIA } from '../../../../shared/constants';
import { CustomBox } from '../../style';

const GridElement = () => {
  const { t } = useTranslation();
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ width: '100%' }}>
      <Grid
        item
        direction='column'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <img src={Ania} alt='foto' />
        <Typography variant='regular'>{t(keys.meettheteam.fe.name)}</Typography>
        <Typography variant='paragraph'>{t(keys.meettheteam.fe.position)}</Typography>
        <CustomBox>
          {SOCIALMEDIA.map((item) => {
            return <div key={item.title}>{item.icon}</div>;
          })}
        </CustomBox>
      </Grid>
      <Grid
        item
        direction='column'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
        }}
      >
        <img src={Asia} alt='foto' />
        <Typography variant='regular'>{t(keys.meettheteam.be.name)}</Typography>
        <Typography variant='paragraph'>{t(keys.meettheteam.be.position)}</Typography>
        <CustomBox>
          {SOCIALMEDIA.map((item) => {
            return <div key={item.title}>{item.icon}</div>;
          })}
        </CustomBox>
      </Grid>
    </Grid>
  );
};

export default GridElement;
