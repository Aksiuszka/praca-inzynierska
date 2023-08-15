import { Grid, Typography } from '@mui/material';

const Headline = ({ pinkLabel, blackLabel }) => {
  return (
    <Grid container direction='row' justifyContent='center' sx={{ width: '100%', gap: '2rem' }}>
      <Typography variant='decorated'>
        <span style={{ color: '#F379A1' }}> {pinkLabel}</span>
      </Typography>
      <Typography variant='decorated'>{blackLabel}</Typography>
    </Grid>
  );
};
export default Headline;
