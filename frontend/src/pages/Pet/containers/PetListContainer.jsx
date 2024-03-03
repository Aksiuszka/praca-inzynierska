/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doc, getDocs, collection, query } from 'firebase/firestore';
import { Typography } from '@mui/material';
import { db } from '../../../config/firebase';
import { PinkCard } from '../styles';
import { PetListItem } from '../components/PetListItem/PetListItem';
import { petArr } from '../mock/mockData';

const blobToUrl = (blobData) => {
  if (blobData instanceof Blob) {
    return URL.createObjectURL(blobData);
  }
  if (typeof blobData === 'string') {
    return blobData;
  }
  return null;
};

export const PetListContainer = () => {
  const [petList, setPetList] = useState([]);
  const { email, username } = useSelector((data) => data.auth);
  const blobUrl = 'blob:http://localhost:3000/41cdd43d-b294-445b-96c5-8a659524a2d5';
  const docRef = doc(db, 'pets', email);
  useEffect(() => {
    const fetchUserListData = async () => {
      if (email) {
        try {
          const q = query(collection(db, 'pets', email, 'PetArray'));
          const querySnapshot = await getDocs(q);

          const fetchedPetList = querySnapshot.docs.map((docu) => ({
            id: docu.id,
            data: docu.data(),
          }));

          setPetList(fetchedPetList);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserListData();
  }, [email]);

  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log(id);
    navigate(id, { state: { petList } });
  };
  console.log(petList);
  return (
    <PinkCard>
      <Typography variant='decoratedSmall'>Twoi podopieczni!</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '4rem' }}>
        {petList.length > 0
          ? petList.map((pet, index) => (
              <PetListItem
                key={`${pet.id}-${index}`}
                id={`${pet.id}-${index}`}
                name={pet.data.name}
                town={pet.data.town}
                img={pet.data.file}
                handleClick={() => handleClick(`${pet.id}-${index}`)}
                email={email}
              />
            ))
          : 'Nie masz dodanych podopiecznych'}
      </div>
    </PinkCard>
  );
};
