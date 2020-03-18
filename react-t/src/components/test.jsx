import React from 'react';
import { useTranslation } from 'react-i18next';

let count = 0;

const Test = ({ children }) => {
    count++;

    const [t, { language }] = useTranslation();

    return (
        <>
            <p>{t('welcome')} + {count} + {language}</p>
            <div>{children}</div>
        </>
    )
}

export default Test;
