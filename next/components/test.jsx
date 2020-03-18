import i18n from '../i18n';

let count = 0;

const Test = ({ children }) => {
    count++;

    const [t, { language }] = i18n.useTranslation();

    return (
        <>
            <p>{t('catalog')} + {count} + {language}</p>
            <div>{children}</div>
        </>
    )
}

export default Test;
