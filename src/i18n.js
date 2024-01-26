import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import  Backend from "i18next-http-backend";

import HttpApi from 'i18next-http-backend';

const i18n = i18next.createInstance();

i18n 
  .use(HttpApi)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    keySeparator: false,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',  // Adjust the path if necessary
    },
  })

  export default i18n;