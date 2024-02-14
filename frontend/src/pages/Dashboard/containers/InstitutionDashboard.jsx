import { Typography, Grid, Stack, Container } from '@mui/material';
import { CustomGrid, WrapContainer, ColumnContainer } from '../../../shared/styles/styles';
import CustomButton from '../../../shared/components/Button';
import { INSTITUTION_LINK_ITEMS } from '../data/resultsData';
import CoffeeGirl from '../../../shared/assets/images/misc/CoffeGirl';

export const InstitutionDashboardContainer = () => {
  return (
    <WrapContainer>
      <CustomGrid color='green' sx={{ py: '3rem' }}>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Typography variant='display' sx={{ color: (theme) => theme.palette.text.primary }}>
            Hej hej Joanna !
          </Typography>
          <br />
          <Typography variant='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi ut aliquip ex ea
            commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do nisi
            ut aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <CustomButton variant='regular' label='Dodaj zwierzę' sx={{ width: '22rem' }} />
        </Grid>
        <Grid item>
          <CoffeeGirl />
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
        {INSTITUTION_LINK_ITEMS.map((item) => (
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
