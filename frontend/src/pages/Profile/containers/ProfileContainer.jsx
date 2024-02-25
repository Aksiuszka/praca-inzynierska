import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { UserProfileContainer } from './UserProfileContainer';
import { InstitutionProfileContainer } from './InstitutionProfileContainer';

export const ProfileContainer = () => {
  const [userRole, setUserRole] = useState('');
  const { email } = useSelector((data) => data.auth);
  const docRef = doc(db, 'users', email);

  useEffect(() => {
    const fetchUserData = async () => {
      if (email) {
        const userdata = await getDoc(docRef);
        const profileDetails = userdata.data();
        setUserRole(profileDetails.role);
      }
    };

    fetchUserData();
  }, [docRef, email]);

  if (userRole === 'subscriber') {
    return <UserProfileContainer />;
  }
  return <InstitutionProfileContainer />;
};
