import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from '../Logo';
import { Dot, CustomGrid, CustomContainer as Container } from './style';

const Footer = () => {
  return (
    <CustomGrid container>
      <Container item sm={4}>
        <Logo />
      </Container>
      <Grid item container sm={7} alignItems='center' justifyContent='space-between'>
        <Grid item sm={2}>
          <Typography variant='highlighted'>team</Typography>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Typography variant='highlighted'>privacy</Typography>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Typography variant='highlighted'>contact</Typography>
        </Grid>
        <Dot />
        <Grid item sm={2}>
          <Typography variant='highlighted'>faq</Typography>
        </Grid>
      </Grid>
    </CustomGrid>
  );
};
export default Footer;
