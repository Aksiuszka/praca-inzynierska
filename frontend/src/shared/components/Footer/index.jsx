import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import keys from '../../../locales/keys';
import Logo from '../Logo';
import { Dot, CustomGrid, CustomContainer as Container } from './style';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <CustomGrid container>
      <Container item sm={4}>
        <Logo />
      </Container>
      <Grid item container sm={7} alignItems='center' justifyContent='space-between'>
        <Grid item sm={2}>
          <Typography variant='highlighted'> {t(keys.common.footer.teamLink)}</Typography>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Typography variant='highlighted'>{t(keys.common.footer.privacyLink)}</Typography>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Typography variant='highlighted'>{t(keys.common.footer.contactLink)}</Typography>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Typography variant='highlighted'>{t(keys.common.footer.faqLink)}</Typography>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};
export default Footer;
