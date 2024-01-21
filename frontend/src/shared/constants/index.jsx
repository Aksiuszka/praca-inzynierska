import Linkedin from '../assets/icons/Linkedin';
import Github from '../assets/icons/Github';
import Twitter from '../assets/icons/Twitter';

export const ROUTES = {
  root: '/',
  dashboard: '/dashboard',
  about: '/about',
  auth: '/auth',
  meettheteam: '/meettheteam',
  privacy: '/privacy',
  contact: '/contact',
  prescreening: '/prescreening',
  review: '/review',
  smartTest: '/smartTest',
  petTest: '/petTest',
  result: '/result',
  profile: '/profile',
  stories: '/stories',
};

export const LanguageKeysEnum = {
  en: 'en',
  pl: 'pl',
};

export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const simpleSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const SOCIALMEDIA = [
  { title: 'github', icon: <Github /> },
  { title: 'linkedin', icon: <Linkedin /> },
  { title: 'twitter', icon: <Twitter /> },
];

export const SOCIALMEDIALINKSFE = [
  { title: 'github', route: 'https://github.com/Aksiuszka' },
  { title: 'linkedin', route: 'https://www.linkedin.com/in/anna-kawecka-679a69236/' },
  { title: 'twitter', iconroute: '' },
];

export const SOCIALMEDIALINKSBE = [
  { title: 'github', route: 'https://github.com/Giovanna-89' },
  { title: 'linkedin', route: '' },
  { title: 'twitter', route: '' },
];

export const AVAILABLE_TESTS = [
  { title: 'Prescreening', route: ROUTES.prescreening },
  { title: 'SmartTest', route: ROUTES.smartTest },
  { title: 'PetTest', route: ROUTES.petTest },
];
