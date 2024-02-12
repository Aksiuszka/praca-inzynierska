import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid, Stack, Container } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { CustomGrid, WrapContainer, ColumnContainer } from '../../../shared/styles/styles';
import CustomButton from '../../../shared/components/Button';
import Dog from '../../../shared/assets/images/dashboard/user/Dog';
import { db } from '../../../config/firebase';
import { Modal } from '../../../shared/components/Modal';
import { LINK_ITEMS } from '../data/resultsData';
import { getHeroImgInfo } from '../../../shared/utils/renderReadinessData';

export const UserDashboardContainer = () => {
  const [results, setResults] = useState({ prescreening: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { email, username } = useSelector((data) => data.auth);
  const firstName = username ? username.split(' ')[0] : null;
  const name = firstName || email;

  const docRef = doc(db, 'users', email);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleClick = async () => {
    try {
      const userdata = await getDoc(docRef);
      const profileDetails = userdata.data();
      setResults({ prescreening: profileDetails.prescreening });
      console.log('Cached document data:', userdata.data());
    } catch (e) {
      console.log('Error getting cached document:', e);
    } finally {
      setIsModalOpen(true);
    }
  };
  console.log(results);
  const { title, content } = getHeroImgInfo(results.prescreening);

  return (
    <WrapContainer>
      <CustomGrid color='green'>
        <Grid item sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography variant='display' sx={{ color: (theme) => theme.palette.text.primary }}>
            Hej hej {name}
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
          <ColumnContainer
            key={item.id}
            sx={{ width: '28rem', textAlign: 'center' }}
            onClick={handleClick}
          >
            <div>{item.icon}</div>
            <Typography variant='headline'>{item.title}</Typography>
            <Typography variant='paragraph'>{item.content}</Typography>
          </ColumnContainer>
        ))}
      </Container>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <Typography variant='headline'>{title}</Typography>
          <Typography variant='paragraph'>{content}</Typography>
        </Modal>
      )}
    </WrapContainer>
  );
};
