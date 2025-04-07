import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en';
import afTranslation from './translations/af';
import zuTranslation from './translations/zu';
import xhTranslation from './translations/xh';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      af: {
        translation: afTranslation
      },
      zu: {
        translation: zuTranslation
      },
      xh: {
        translation: xhTranslation
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
