import Stars3 from '../../../assets/images/components/stars3';
import Logo from '../../../assets/images/components/logo';
import Pic1 from '../../../assets/photos/pic1.png';
import Pic2 from '../../../assets/photos/pic2.png';
import Pic3 from '../../../assets/photos/pic3.png';

export const SliderHome = [
  {
    id: 1,
    picture: <Logo />,
    login: 'Majka98',
    city: 'Płock',
    rating: <Stars3 />,
    content: 'Świetna aplikacja. Dzięki niej znalazłam swojego psa',
  },
  {
    id: 2,
    picture: <Logo />,
    login: 'Sławoj19',
    city: 'Płock',
    rating: <Stars3 />,
    content: 'Świetna aplikacja. Dzięki niej znalazłem swojego kota',
  },
  {
    id: 3,
    picture: <Logo />,
    login: 'Karolina88',
    city: 'Płock',
    rating: <Stars3 />,
    content: 'Świetna aplikacja. Dzięki niej znalazłam swojego psa',
  },
  {
    id: 4,
    picture: <Logo />,
    login: 'Kryspin00',
    city: 'Płock',
    rating: <Stars3 />,
    content: 'Świetna aplikacja. Dzięki niej znalazłem swojego pkota',
  },
];

export const SliderAbout = [
  {
    id: 1,
    picture: <img src={Pic1} alt='dog owner' />,
  },
  {
    id: 2,
    picture: <img src={Pic2} alt='dog owner' />,
  },
  {
    id: 3,
    picture: <img src={Pic3} alt='dog owner' />,
  },
  {
    id: 4,
    picture: <img src={Pic1} alt='dog owner' />,
  },
];
