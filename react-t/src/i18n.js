const i18n = require("i18next").default;
const initReactI18next = require("react-i18next").initReactI18next;

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            en: {
                translation: {
                    "welcome": "EN"
                }
            },
            ru: {
                translation: {
                    "welcome": "RU"
                }
            },
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

