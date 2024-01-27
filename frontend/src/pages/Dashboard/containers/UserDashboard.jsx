import { Typography, Grid, Stack, Container } from '@mui/material';
import { CustomGrid, WrapContainer, ColumnContainer } from '../../../shared/styles/styles';
import CustomButton from '../../../shared/components/Button';
import Dog from '../../../shared/assets/images/dashboard/user/Dog';
import { LINK_ITEMS } from '../data/resultsData';

export const UserDashboardContainer = () => {
  return (
    <WrapContainer>
      <CustomGrid color='green'>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant='display' sx={{ color: (theme) => theme.palette.text.primary }}>
            Hej hej Joanna!
          </Typography>
          <br />
          <Typography variant='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi ut aliquip ex ea
            commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi
            ut aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <CustomButton variant='regular' label='explore' sx={{ width: '3rem' }} />
        </Grid>
        <Grid item>
          <Dog />
        </Grid>
      </CustomGrid>
      <Stack sx={{ width: '100%', gap: '2rem' }}>
        <Typography variant='headline'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </Typography>
        <Typography variant='paragraph'>
          Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur
          adipiscing.
        </Typography>
      </Stack>
      <Container sx={{ display: 'flex', gap: '10rem' }}>
        {LINK_ITEMS.map((item) => (
          <ColumnContainer key={item.id} sx={{ width: '28rem', textAlign: 'center' }}>
            <div>{item.icon}</div>
            <Typography variant='headline'>{item.title}</Typography>
            <Typography variant='paragraph'>{item.content}</Typography>
          </ColumnContainer>
        ))}
      </Container>
    </WrapContainer>
  );
};
