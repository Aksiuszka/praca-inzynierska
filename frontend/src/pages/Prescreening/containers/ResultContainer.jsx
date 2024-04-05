/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-unused-vars */
import { useMemo, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { doc, getDocs, collection, query } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';
import { Typography, Grid } from '@mui/material';
import { db } from '../../../config/firebase';
import keys from '../../../locales/keys';
import {
  ColumnContainer,
  CustomBall,
  CustomGrid,
  LeftColumnContainer,
  RightButtonContainer,
  WrapContainer,
} from '../../../shared/styles/styles';
import Button from '../../../shared/components/Button';
import SliderComponent from '../../../shared/components/Slider';
import { getPetTestResultInfo } from '../utils/getPetTestResultInfo';
import { ROUTES } from '../../../shared/constants';
import NotReady from '../../../shared/assets/images/results/prescreening/NotReady.png';
import NotBad from '../../../shared/assets/images/results/prescreening/NotBad.png';
import Ready from '../../../shared/assets/images/results/prescreening/Ready.png';
import FaqItem from '../../../shared/components/FAQ';
import ThinkingMan from '../../../shared/assets/images/results/prescreening/ThinkingMan';
import { newPetExpectationsData, newPetPreparationData } from '../data/common';
import { renderPetResultImg } from '../utils/renderPetTemperamentPicture';
import { renderSmartTestResultImg } from '../utils/renderSmartTestPicture';
import { PinkCard } from '../../../pages/Pet/styles';
import { PetListItem } from '../../../pages/Pet/components/PetListItem/PetListItem';
import { PinkCard } from '../../../pages/Pet/styles';
import { PetListItem } from '../../../pages/Pet/components/PetListItem/PetListItem';

export const ResultContainer = () => {
  const [petList, setPetList] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = useMemo(() => location, [location]);
  const { category, testResults: result } = state || {};
  const { data, color } = getPetTestResultInfo(result);

  const renderTest = (type) => {
    switch (type) {
      case 'prescreen':
        return navigate(ROUTES.prescreening);
      case 'smartTest':
        return navigate(ROUTES.smartTest);
      case 'petTest':
        return navigate(ROUTES.petTest);
      default:
        return navigate(ROUTES.dashboard);
    }
  };

  const renderHeroImg = (type) => {
    switch (type) {
      case 'ready':
        return <img src={Ready} alt='ready' />;
      case 'notbad':
        return <img src={NotBad} alt='almost ready' />;
      case 'notReady':
        return <img src={NotReady} alt='not ready' />;
      default:
        return null;
    }
  };

  const getHeroImgInfo = (type) => {
    let title;
    let content;

    switch (type) {
      case 'ready':
        title = 'Ready!';
        content =
          ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
        break;
      case 'notbad':
        title = 'Not Bad!';
        content =
          ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
        break;
      case 'notReady':
        title = 'Not Ready!';
        content =
          ' Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, coteturadipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sitamet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsumdolor sit amet, cotetur adipiscing.';
        break;
      default:
        title = 'Default Title';
        content = 'Default Content Lorem ipsum...';
    }

    return { title, content };
  };

  const handleSubmit = () => {
    navigate(ROUTES.dashboard);
  };
  const handleBack = () => {
    renderTest(category);
  };

  useEffect(() => {
    if (category === 'smartTest' && petList.length === 0) {
      const fetchUserListData = async () => {
        try {
          const q = query(collection(db, 'pets', result, 'PetArray'));
          const querySnapshot = await getDocs(q);

          const fetchedPetList = querySnapshot.docs.map((docu) => ({
            id: docu.id,
            data: docu.data(),
          }));

          setPetList(fetchedPetList);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUserListData();
    }
  }, [petList, result, category]);
  console.log(petList);

  const handleClick = (id) => {
    console.log(id);
  };

  if (category === 'prescreen') {
    const { title, content } = getHeroImgInfo(result);
    return (
      <ColumnContainer>
        <CustomGrid color='red' width='100%'>
          <Grid item width='50%'>
            {category && renderHeroImg(result)}
          </Grid>
          <Grid item width='50%'>
            <Typography variant='headline'>{title}</Typography>
            <br />
            <Typography variant='paragraph'>{content}</Typography>
          </Grid>
        </CustomGrid>
        <LeftColumnContainer>
          <Typography variant='headline'>Jak przygotować się na adopciaka?</Typography>
          <WrapContainer sx={{ gap: '10rem' }}>
            {newPetPreparationData.map((item) => (
              <ColumnContainer key={item.id} sx={{ width: '28rem', textAlign: 'center' }}>
                <CustomBall color={item.color} />
                <Typography variant='headline'>{item.title}</Typography>
                <Typography variant='paragraph'>{item.content}</Typography>
              </ColumnContainer>
            ))}
          </WrapContainer>
          <Typography variant='headline'>Jak przygotować dom?</Typography>
          <FaqItem
            number={t(keys.home.faq.one.number)}
            title={t(keys.home.faq.one.title)}
            content={t(keys.home.faq.one.content)}
            variant='result'
            noLine
          />
          <FaqItem
            number={t(keys.home.faq.two.number)}
            title={t(keys.home.faq.two.title)}
            content={t(keys.home.faq.two.content)}
            variant='result'
            noLine
          />
          <FaqItem
            number={t(keys.home.faq.three.number)}
            title={t(keys.home.faq.three.title)}
            content={t(keys.home.faq.three.content)}
            variant='result'
          />
          <Typography variant='headline'>Jak przygotować bliskich?</Typography>
          <CustomGrid width='100%'>
            <Grid item width='50%'>
              <ThinkingMan />
            </Grid>
            <Grid item width='50%'>
              <Typography variant='paragraph'>
                Lorem ipsum dolor sit amet, a consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
          </CustomGrid>
          <Typography variant='headline'>Czego się spodziewać?</Typography>
          <WrapContainer sx={{ gap: '10rem' }}>
            {newPetExpectationsData.map((item) => (
              <ColumnContainer key={item.id} sx={{ width: '28rem', textAlign: 'center' }}>
                <Typography variant='headline'>{item.title}</Typography>
                <Typography variant='paragraph'>{item.content}</Typography>
              </ColumnContainer>
            ))}
          </WrapContainer>
        </LeftColumnContainer>
      </ColumnContainer>
    );
  }
  if (category === 'smartTest') {
    return (
      <ColumnContainer>
        <div>{renderSmartTestResultImg(result)}</div>
        <SliderComponent variant='petTest' information={data} color={color} />
        <PinkCard style={{ height: '100%', width: '70rem' }}>
          <Typography variant='highlighted'>Te zwierzęta do Ciebie pasują!!</Typography>
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
                    email={pet.data.email}
                  />
                ))
              : 'Nie masz dodanych podopiecznych'}
          </div>
        </PinkCard>
      </ColumnContainer>
    );
  }
  return (
    category === 'petTest' && (
      <ColumnContainer>
        {renderPetResultImg(result)}
        <SliderComponent variant='petTest' information={data} color={color} />
        <RightButtonContainer>
          <Button variant='regular' label='Twoje testy' onClick={handleSubmit} />
          <Button label='cofnij' onClick={handleBack} />
        </RightButtonContainer>
      </ColumnContainer>
    )
  );
};
