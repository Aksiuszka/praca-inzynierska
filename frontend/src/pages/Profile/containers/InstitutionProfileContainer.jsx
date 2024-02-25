/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { CustomContainer } from '../style';
import Input from '../../../shared/components/Input';
import Button from '../../../shared/components/Button';
import { VOIVODESHIPS } from '../data';
import { Modal } from '../../../shared/components/Modal';
import ProfileLogo from '../../../shared/assets/svg/ProfileLogo';

export const InstitutionProfileContainer = () => {
  const [fetchedDataList, setFetchedDataList] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    town: '',
    post: '',
    area: '',
    phone: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState();
  const navigate = useNavigate();
  const { email, username } = useSelector((data) => data.auth);
  const docRef = doc(db, 'institutions', email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      file: file || null,
    };
    console.log(submitData);
    if (submitData && email) {
      setDoc(doc(db, 'institutions', email), {
        name: submitData.name,
        address: submitData.address,
        town: submitData.town,
        post: submitData.post,
        area: submitData.area,
        phone: submitData.phone,
        file: submitData.file,
      });
      navigate('/dashboard-redirect');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const fetchInstitutionData = async () => {
      if (email && Object.keys(fetchedDataList).length === 0) {
        const userdata = await getDoc(docRef);
        const fetchedInstitutionList = userdata.data();
        setFetchedDataList(fetchedInstitutionList);
        if (fetchedDataList.length !== 0) {
          setFormData(fetchedInstitutionList);
        }
      }
    };

    fetchInstitutionData();
  }, [email, fetchedDataList]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomContainer style={{ marginBlock: '2rem' }}>
          <CustomContainer
            style={{ flexDirection: 'column', justifyContenf: 'center', alignItems: 'center' }}
          >
            {file ? (
              <img
                src={file}
                alt='img'
                style={{
                  borderRadius: '50%',
                  width: '7rem',
                  height: '7rem',
                  objectFit: 'cover',
                  fontFamily: 'Poppins',
                }}
              />
            ) : (
              <ProfileLogo />
            )}
            <label htmlFor='upload-input'>
              Wybierz zdjęcie
              <input
                id='upload-input'
                style={{ display: 'none' }}
                name='img'
                onChange={(e) => setFile(URL.createObjectURL(e.target.files[0]))}
                type='file'
              />
            </label>
          </CustomContainer>
          <Typography variant='decorated'>Informacje Profilowe</Typography>
        </CustomContainer>
        <CustomContainer>
          <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
            <Input
              sx={{ width: '23rem' }}
              name='name'
              onChange={handleChange}
              value={(formData.name && formData.name) || ''}
            >
              Nazwa Organizacji
            </Input>
            <Input
              sx={{ width: '23rem' }}
              name='town'
              onChange={handleChange}
              value={(formData.town && formData.town) || ''}
            >
              Miasto
            </Input>
            <Input
              sx={{ width: '23rem' }}
              name='post'
              onChange={handleChange}
              value={(formData.post && formData.post) || ''}
            >
              Kod Pocztowy
            </Input>
          </Grid>
          <Grid container item sm={12} md={6} sx={{ gap: '2rem', flexDirection: 'column' }}>
            <Input
              sx={{ width: '23rem' }}
              name='address'
              onChange={handleChange}
              value={(formData.address && formData.address) || ''}
            >
              Adres
            </Input>
            <FormControl sx={{ marginBlockStart: '1.3rem' }}>
              <InputLabel sx={{ fontFamily: 'Poppins' }}>Województwo</InputLabel>
              <Select
                sx={{ width: '23rem' }}
                id='demo-simple-select'
                label='Województwo'
                onChange={handleChange}
                value={formData?.area || ''}
                name='area'
              >
                {VOIVODESHIPS.map((voivodeship) => (
                  <MenuItem key={voivodeship} value={voivodeship}>
                    {voivodeship}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Input
              sx={{ width: '23rem' }}
              name='phone'
              onChange={handleChange}
              value={(formData.phone && formData.phone) || ''}
            >
              Telefon do kontaktu
            </Input>
          </Grid>
        </CustomContainer>
        <Button
          variant='regular'
          label='Zapisz dane'
          type='submit'
          sx={{ marginTop: '3rem', width: '100%' }}
        />
      </form>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} variant='login'>
          <Typography variant='headline'>Hurra! 🎉</Typography>
          <Typography variant='paragraph'>Dane zapisane.🐧 ✨</Typography>
          <Button variant='regular' label='Zamknij' />
        </Modal>
      )}
    </>
  );
};
