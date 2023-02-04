import React from 'react';

import './style.css';
import FlagSpain from '../../assets/flags/spain';
import FlagUK from '../../assets/flags/uk';
import { useTranslation } from 'react-i18next';

const langs = {
    en: { nativeName: 'English', abbr: 'en', flag: <FlagUK /> },
    es: { nativeName: 'Español', abbr: 'es', flag: <FlagSpain /> },
};

export default function LangButton({ lang }) {
    const { i18n } = useTranslation();

    const language = langs[lang];
    const isCurrentLang = i18n.resolvedLanguage === lang;

    function handleChangeLang() {
        i18n.changeLanguage(lang);
    }

    return (
        <button
            className="language-button"
            onClick={handleChangeLang}
            style={{ transform: isCurrentLang ? 'scale(1.15)' : '' }}
        >
            {language.flag}
            <p style={{ fontWeight: isCurrentLang ? 600 : 400 }}>{language.abbr}</p>
        </button>
    );
}
