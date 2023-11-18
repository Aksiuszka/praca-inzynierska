import { Container, Grid, Typography } from '@mui/material';
import { CounterDot } from './styles';

export const TestPageLayout = ({ children, counter, title }) => {
  return (
    <Grid
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <Grid container item justifyContent='center' width='100%'>
        <Container sx={{ display: 'flex', justifyContent: 'start' }}>
          <CounterDot>{counter || 1}</CounterDot>
          <Typography variant='headline'>{title}</Typography>
        </Container>
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
    </Grid>
  );
};
