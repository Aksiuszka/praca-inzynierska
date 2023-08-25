import { useTranslation } from 'react-i18next';
import { Grid, Typography } from '@mui/material';
import keys from '../../../../locales/keys';
import { BottomContainer, Title } from '../../style';
import CustomButton from '../../../../shared/components/Button';
import LaptopGirl from '../../../../shared/assets/images/misc/LaptopGirl';

export const Contact = () => {
  const { t } = useTranslation();
  return (
    <BottomContainer container>
      <Grid item md={6}>
        <LaptopGirl width='100%' />
      </Grid>
      <Grid
        container
        item
        md={5}
        sx={{ flexDirection: 'column', gap: '2.5rem', justifyContent: 'center' }}
      >
        <Title variant='decorated' sx={{ fontSize: '2.5rem' }}>
          {t(keys.about.contact.title)}
        </Title>
        <Typography variant='paragraph'>{t(keys.about.contact.paragraph)}</Typography>
        <CustomButton variant='regular' label='Contact us' />
      </Grid>
    </BottomContainer>
  );
};
