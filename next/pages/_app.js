import React from 'react'
import App from 'next/app'
import { appWithTranslation, i18n } from '../i18n'

const Locales = () => (
    <>
        {['fi', 'en', 'ru'].map(locale => (
            <button type="button" key={locale} onClick={() => { i18n.changeLanguage(locale); }}>
                {locale}
            </button>
        ))}
    </>
);

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <>
                <Locales />
                <Component {...pageProps} />
            </>

        )
    }
}

export default appWithTranslation(MyApp)
