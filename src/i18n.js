// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Adjust the path based on your setup
      // The line below might be necessary if your public directory is not the base path
      // loadPath: `${window.location.origin}/public/locales/{{lng}}.json`,
    },
  });

export default i18n;
