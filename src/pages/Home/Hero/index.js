import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { faChevronDown, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeroSection from '../../../components/HeroSection';

import './style.css';

export default function Hero() {
    return (
        <HeroSection heading={<Heading />} subheading={<Subheading />} cta={<CallToAction />}>
            <div className="picture">
                <FontAwesomeIcon icon={faUser} id="profile-picture" />
                {/* <img src="" alt="This is me!" id="profile-picture" /> */}
            </div>
        </HeroSection>
    );
}

function Heading() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <h2 className="name">Carlos Cardona</h2>
            <h1 className="header">{t('home.hero.header1')}</h1>
            <h1 className="header bold">{t('home.hero.header2')}</h1>
        </Fragment>
    );
}

function Subheading() {
    const { t } = useTranslation();
    return (
        <Fragment>
            <p className="subheading">{t('home.hero.introduction')}</p>
            <p className="subheading">{t('home.hero.subheading')}</p>
        </Fragment>
    );
}

function CallToAction() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <button id="go-to-contact">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>{t('home.hero.cta.message')}</span>
            </button>
            <button id="read-more">
                <span>{t('home.hero.cta.readMore')}</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </Fragment>
    );
}
