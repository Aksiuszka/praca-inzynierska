import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../locales/keys';

const Headline = () => {
  const { t } = useTranslation();
  return (
    <Grid container direction='column' sx={{ marginBlockEnd: '5rem', width: '100%' }}>
      <Typography variant='decorated' sx={{ marginBlockEnd: '2rem' }}>
        {t(keys.meettheteam.headline.main)}
        <span style={{ color: '#F379A1' }}>{t(keys.meettheteam.headline.mainAccent)}</span>
      </Typography>
      <Typography variant='paragraph'>{t(keys.meettheteam.headline.sub)}</Typography>
    </Grid>
  );
};
export default Headline;
