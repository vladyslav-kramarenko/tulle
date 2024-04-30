import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(initReactI18next)
    .use(HttpBackend)
    .use(LanguageDetector)
    .init({
        supportedLngs: ['en', 'ua'],
        fallbackLng: 'ua',
        debug: true,
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            caches: ['localStorage', 'cookie'],
            cookieMinutes: 10,
            cookieDomain: 'tulle.ua',//TODO update after getting a domain name
        },
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: '/locales/{{lng}}.json',
        }
    });

export default i18n;
