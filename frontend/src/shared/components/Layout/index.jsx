import { Grid } from '@mui/material';
import Footer from '../Footer';
import Header from '../Header';

const Layout = ({ children }) => {
  return (
    <Grid
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid container item justifyContent='center'>
        <Header />
        <Grid
          container
          justifyContent='center'
          sx={{
            padding: (theme) => {
              return {
                md: theme.spacing(10),
                xs: theme.spacing(4, 1.2, 1.2),
              };
            },
            width: '100%',
          }}
        >
          {children}
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};
export default Layout;
