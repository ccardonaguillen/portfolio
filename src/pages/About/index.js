import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import TextSection from '../../components/TextSection';
import HeroSection from '../../components/HeroSection';

import './style.css';

export default function About() {
    const { t } = useTranslation();
    return (
        <main id="about">
            <HeroSection
                heading={
                    <Fragment>
                        "Shoot for the stars, but if you happen to miss <br />
                        shoot for the moon instead."
                    </Fragment>
                }
                subheading="&ndash;  Neil Armstrong"
            />
            <TextSection
                alignment="left"
                heading={t('about.section1.header')}
                decoration={<img src="#" alt="" />}
            >
                <p className="paragraph">{t('about.section1.paragraph1')}</p>
                <p className="paragraph">{t('about.section1.paragraph2')}</p>
            </TextSection>
            <TextSection
                alignment="right"
                heading={t('about.section2.header')}
                decoration={<img src="#" alt="" />}
            >
                <p className="paragraph">{t('about.section2.paragraph1')}</p>
                <p className="paragraph">{t('about.section2.paragraph2')}</p>
            </TextSection>
            <TextSection
                alignment="center"
                heading={t('about.section3.header')}
                decoration={<img src="#" alt="" />}
            >
                <p className="paragraph">{t('about.section3.paragraph1')}</p>
                <p className="paragraph">{t('about.section3.paragraph2')}</p>
            </TextSection>
        </main>
    );
}
