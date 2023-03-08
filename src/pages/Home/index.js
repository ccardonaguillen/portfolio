import { useTranslation } from 'react-i18next';

import Hero from './Hero';
import TextSection from '../../components/TextSection';
import Contact from './Contact';
import SpinningCarousel from '../../components/SpinningCarousel';
import devItems from '../../assets/devicons';

import './style.css';

export default function Home() {
    const { t } = useTranslation();
    return (
        <main id="home">
            <Hero />
            <TextSection
                id="home-about"
                alignment="right"
                heading={t('home.about.header')}
                decoration={<img src="#" alt="" />}
            >
                <p className="paragraph">{t('home.about.paragraph1')}</p>
                <p className="paragraph">{t('home.about.paragraph2')}</p>
            </TextSection>
            <SpinningCarousel>
                {Object.values(devItems).map((item, idx) => (
                    <div key={item.name}>
                        {/* <p className="num">{idx}</p> */}
                        <div>
                            <img alt={item.title} src={item.icon} />
                        </div>
                        <p className="title">{item.title}</p>
                    </div>
                ))}
            </SpinningCarousel>
            <Contact />
        </main>
    );
}
