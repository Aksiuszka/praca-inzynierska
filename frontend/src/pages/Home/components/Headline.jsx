import { Grid } from '@mui/material';
import FaqDog from '../../../shared/assets/images/headlines/Dog';
import CardsCat from '../../../shared/assets/images/headlines/Cat';
import SliderCat from '../../../shared/assets/images/headlines/Cat2';
import { AccentTypography, StyledHeadline } from '../style';

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
          <StyledHeadline variant='decorated'>
            Lorem ipsum dolor sit amet, cotetur <AccentTypography> adipiscing.</AccentTypography>
          </StyledHeadline>
        </Grid>
      </Grid>
    );
  }
  if (variant === 'slider') {
    return (
      <Grid
        display='flex'
        sx={{
          marginBlock: '5rem',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          item
          container
          lg={3}
          sx={{
            margin: '-8rem',
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          <SliderCat />
        </Grid>
        <Grid
          item
          lg={9}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <StyledHeadline variant='decorated'>
            What our users <AccentTypography> say?</AccentTypography>
          </StyledHeadline>
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
        <StyledHeadline variant='decorated'>
          Get to know us <AccentTypography> more</AccentTypography>
        </StyledHeadline>
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
