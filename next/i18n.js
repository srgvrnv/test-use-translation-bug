const NextI18Next = require('next-i18next').default

module.exports = new NextI18Next({
    defaultLanguage: 'fi',
    otherLanguages: ['en', 'ru'],
    localeSubpaths: {
        en: 'en',
        ru: 'ru',
    },
})
