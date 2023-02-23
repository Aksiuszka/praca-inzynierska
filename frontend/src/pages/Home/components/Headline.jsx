import { Grid, Typography } from '@mui/material';
import FaqDog from '../../../shared/assets/images/FaqDog';
import CardsCat from '../../../shared/assets/images/cardsCat';
import { AccentTypography } from '../style';

const HeadlineContainer = ({ variant }) => {
  if (variant === 'cards') {
    return (
      <Grid container sx={{ marginBlock: '5rem', width: '100%' }}>
        <Grid
          item
          container
          lg={3}
          sx={{ margin: '-5rem', display: { xs: 'none', sm: 'none', md: 'block' } }}
        >
          <CardsCat />
        </Grid>
        <Grid item container lg={9}>
          <Typography variant='decorated'>
            Lorem ipsum dolor sit amet, cotetur <AccentTypography> adipiscing.</AccentTypography>
          </Typography>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid
      container
      sx={{
        marginBlock: '2rem',
        width: '100%',
        marginInlineStart: '5rem',
      }}
    >
      <Grid
        sx={{
          width: '100%',
          display: 'flex',
        }}
        item
        lg={9}
      >
        <Typography variant='decorated'>
          Get to know us <AccentTypography> more</AccentTypography>
        </Typography>
      </Grid>
      <Grid
        item
        lg={3}
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
        }}
      >
        <FaqDog width='100%' />
      </Grid>
    </Grid>
  );
};
export default HeadlineContainer;
