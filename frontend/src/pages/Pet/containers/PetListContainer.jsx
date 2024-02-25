/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { Typography } from '@mui/material';
import { db } from '../../../config/firebase';
import { PinkCard } from '../styles';
import { PetListItem } from '../components/PetListItem/PetListItem';

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
  const [petList, setPetList] = useState({});
  const { email, username } = useSelector((data) => data.auth);
  const blobUrl = 'blob:http://localhost:3000/41cdd43d-b294-445b-96c5-8a659524a2d5';
  const docRef = doc(db, 'pets', email);
  useEffect(() => {
    const fetchUserListData = async () => {
      if (email && Object.keys(petList).length === 0) {
        const userdata = await getDoc(docRef);
        const fetchedPetList = userdata.data();
        fetchedPetList.fileUrl = blobToUrl(fetchedPetList.file);
        setPetList(fetchedPetList);
      }
    };

    fetchUserListData();
  }, [email, petList]);

  return (
    <PinkCard>
      <Typography variant='decoratedSmall'>Twoi podopieczni</Typography>
      {petList ? (
        <PetListItem name={petList.name} town={petList.town} img={blobToUrl(blobUrl)} />
      ) : (
        'Nie masz dodanych podopiecznych'
      )}
    </PinkCard>
  );
};
