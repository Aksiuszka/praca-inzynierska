import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { LanguageKeysEnum } from '../shared/constants';
import pl from './translations/pl';

export const resources = {
  pl,
};

const DEFAULT_LOCALE = LanguageKeysEnum.pl;

i18n.use(initReactI18next).init({
  resources,
  ns: 'translations',
  lng: 'pl',
  fallbackLng: DEFAULT_LOCALE,
  interpolation: { escapeValue: false },
});

export default i18n;
