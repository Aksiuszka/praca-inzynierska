import SmartTestResultSvg from '../../../shared/assets/svg/SmartTestResultSvg';
import { ROUTES } from '../../../shared/constants';
import DataSvg from '../../../shared/assets/svg/DataSvg';
import PrescreeningResultsSvg from '../../../shared/assets/svg/PrescreeningResultsSvg';

export const LINK_ITEMS = [
  {
    icon: <SmartTestResultSvg />,
    title: 'Wyniki smartTestu',
    route: ROUTES.prescreening,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
  {
    icon: <PrescreeningResultsSvg />,
    title: 'Wyniki prescreeningu',
    route: ROUTES.smartTest,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
  {
    icon: <DataSvg />,
    title: 'Twoje Dane',
    route: ROUTES.petTest,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
];

export const INSTITUTION_LINK_ITEMS = [
  {
    icon: <SmartTestResultSvg />,
    title: 'Dodaj podopiecznego',
    route: ROUTES.addPet,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
  {
    icon: <PrescreeningResultsSvg />,
    title: 'Dane Organizacji',
    route: ROUTES.smartTest,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
  {
    icon: <DataSvg />,
    title: 'Twoi podopieczni',
    route: ROUTES.petTest,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
];
