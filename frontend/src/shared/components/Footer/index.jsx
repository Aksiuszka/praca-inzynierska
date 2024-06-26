import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants';
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
          <Link to={ROUTES.meettheteam} style={{ textDecoration: 'none' }}>
            <Typography variant='highlighted'> {t(keys.common.footer.teamLink)}</Typography>
          </Link>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Link to={ROUTES.privacy} style={{ textDecoration: 'none' }}>
            <Typography variant='highlighted'>{t(keys.common.footer.privacyLink)}</Typography>
          </Link>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Link to={ROUTES.contact} style={{ textDecoration: 'none' }}>
            <Typography variant='highlighted'>{t(keys.common.footer.contactLink)}</Typography>
          </Link>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};
export default Footer;
