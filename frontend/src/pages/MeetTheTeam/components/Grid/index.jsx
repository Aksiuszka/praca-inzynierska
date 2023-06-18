import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../locales/keys';
import Ania from '../../../../shared/assets/images/team/ania.jpg';
import Asia from '../../../../shared/assets/images/team/asia.png';
import { SOCIALMEDIA, SOCIALMEDIALINKSFE, SOCIALMEDIALINKSBE } from '../../../../shared/constants';
import { CustomBox, CustomGridItem } from '../../style';

const GridElement = () => {
  const { t } = useTranslation();
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ width: '100%' }}>
      <CustomGridItem item>
        <img src={Ania} alt='foto' />
        <Typography variant='regular'>{t(keys.meettheteam.fe.name)}</Typography>
        <Typography variant='paragraph'>{t(keys.meettheteam.fe.position)}</Typography>
        <CustomBox>
          {SOCIALMEDIA.map((item, index) => {
            return (
              <div key={item.title}>
                <a href={SOCIALMEDIALINKSFE[index].route}>{item.icon}</a>
              </div>
            );
          })}
        </CustomBox>
      </CustomGridItem>
      <CustomGridItem item>
        <img src={Asia} alt='foto' />
        <Typography variant='regular'>{t(keys.meettheteam.be.name)}</Typography>
        <Typography variant='paragraph'>{t(keys.meettheteam.be.position)}</Typography>
        <CustomBox>
          {SOCIALMEDIA.map((item, index) => {
            return (
              <div key={item.title}>
                <a href={SOCIALMEDIALINKSBE[index].route}>{item.icon}</a>
              </div>
            );
          })}
        </CustomBox>
      </CustomGridItem>
    </Grid>
  );
};

export default GridElement;
