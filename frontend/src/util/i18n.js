import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: true,

  interpolation: {
    escapeValue: false,
  },
  nsSeparator: false,
  fallbackLng: 'ru',
  keySeparator: false,

  detection: {
    order: ['queryString', 'cookie', 'localStorage'],
    cache: ['cookie']
  }
});


export {i18n}
