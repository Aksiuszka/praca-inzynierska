import SmartTestResultSvg from '../../../shared/assets/svg/SmartTestResultSvg';
import { ROUTES } from '../../../shared/constants';
import DataSvg from '../../../shared/assets/svg/DataSvg';
import PrescreeningResultsSvg from '../../../shared/assets/svg/PrescreeningResultsSvg';

export const LINK_ITEMS = [
  {
    id: 'smartTest',
    icon: <SmartTestResultSvg />,
    title: 'Wyniki smartTestu',
    route: ROUTES.prescreening,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
  {
    id: 'prescreening',
    icon: <PrescreeningResultsSvg />,
    title: 'Wyniki prescreeningu',
    route: ROUTES.smartTest,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
  {
    id: 'data',
    icon: <DataSvg />,
    title: 'Twoje Dane',
    route: ROUTES.profileRedirect,
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
    route: ROUTES.profile,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
  {
    icon: <DataSvg />,
    title: 'Twoi podopieczni',
    route: ROUTES.petList,
    content:
      'Lorem ipsum dolor sit amet, cotetur adipiscing. Lorem ipsum dolor sit amet, cotetur adipiscing.',
  },
];
