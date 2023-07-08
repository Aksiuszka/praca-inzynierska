import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import keys from '../../../../locales/keys';

const Headline = ({ variant }) => {
  const { t } = useTranslation();
  return variant === 'main' ? (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <Typography variant='decorated' sx={{ alignSelf: 'start' }}>
        {t(keys.privacy.headline.main)}
      </Typography>
      <br />
      <Typography variant='paragraph' sx={{ fontStyle: 'italic' }}>
        {t(keys.privacy.headline.sub)}
      </Typography>
      <br />
      <Typography variant='paragraph'>{t(keys.privacy.headline.text)}</Typography>
    </Box>
  ) : (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant='decoratedSmall'>{t(keys.privacy.first.title)}</Typography>
      <br />
      <Typography variant='paragraph'>{t(keys.privacy.first.text)}</Typography>
    </Box>
  );
};

export default Headline;
