/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';
=======
import { doc, deleteDoc } from 'firebase/firestore';
>>>>>>> main
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { GridContainer, BottomSection, CustomBox, TopSection } from '../../styles';
import DigitalPet from '../../../../shared/assets/images/misc/DigitalPet';
import { db } from '../../../../config/firebase';
import Bin from '../../../../shared/assets/icons/Bin';
import { ROUTES } from '../../../../shared/constants';

export const PetListItem = ({ name, town, img, handleClick, id, email }) => {
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();

<<<<<<< HEAD
  const [userRole, setUserRole] = useState('');

=======
>>>>>>> main
  const handleDelete = () => {
    setIsDelete(true);
    deleteDoc(doc(db, 'pets', email, 'PetArray', name));
  };
<<<<<<< HEAD

  const { email: userEmail, username } = useSelector((data) => data.auth);
  const docRef = doc(db, 'users', userEmail);
=======
>>>>>>> main
  useEffect(() => {
    // You can perform any actions you want here when isDelete becomes true
    // For example, you can increment the updateKey to trigger a re-render
    if (isDelete) {
      navigate(ROUTES.dashboardRedirect);
    }
  }, [isDelete]);
<<<<<<< HEAD

  useEffect(() => {
    const fetchUserData = async () => {
      if (userEmail) {
        const userdata = await getDoc(docRef);
        const profileDetails = userdata.data();
        setUserRole(profileDetails.role);
      }
    };

    fetchUserData();
  }, [docRef, email]);

  console.log(userRole);
=======
>>>>>>> main
  return (
    <GridContainer container>
      <Grid item xs={12}>
        <TopSection src={img} onClick={handleClick} />
        {/* <DigitalPet /> */}
      </Grid>
      <Grid item xs={12}>
        <BottomSection elevation={3}>
          <CustomBox>
            <Typography variant='decoratedSmall'>{name || 'Fafik'}</Typography>
            <Typography variant='paragraph'>{town || 'Warszawa'}</Typography>
<<<<<<< HEAD
            {userRole === 'manager' && (
              <Button
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBlock: '0px',
                  gap: '10px',
                }}
                onClick={handleDelete}
              >
                <Bin />

                <Typography variant='paragraph' sx={{ paddingBlock: '12px', textAlign: 'center' }}>
                  Usuń
                </Typography>
              </Button>
            )}
=======
            <Button
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBlock: '0px',
                gap: '10px',
              }}
              onClick={handleDelete}
            >
              <Bin />
              <Typography variant='paragraph' sx={{ paddingBlock: '12px', textAlign: 'center' }}>
                Usuń
              </Typography>
            </Button>
>>>>>>> main
          </CustomBox>
        </BottomSection>
      </Grid>
    </GridContainer>
  );
};
