import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDownload, faGears, faSchool } from '@fortawesome/free-solid-svg-icons';

import EducationCard from '../../components/Card/EducationCard';
import ExperienceCard from '../../components/Card/ExperienceCard';
import workExperience from '../../assets/lists/workExperience';
import education from '../../assets/lists/education';

import './style.css';
import HeroSection from '../../components/HeroSection';

function CallToAction() {
    const { t } = useTranslation();

    return (
        <Fragment>
            <button id="download-resume">
                <span>{t('experience.hero.cta.resume')}</span>
                <FontAwesomeIcon icon={faDownload} />
            </button>
            {/* <button id="go-to-edcuation">
                <FontAwesomeIcon icon={faSchool} />

                <span>My education</span>
            </button> */}
        </Fragment>
    );
}

export default function Experience() {
    const { t } = useTranslation();

    return (
        <main id="experience">
            <HeroSection
                heading='"Not all those who wander are lost"'
                subheading={t('experience.hero.subheading')}
                cta={<CallToAction />}
            />
            <section id="work">
                {workExperience.map((details) => (
                    <ExperienceCard key={details.id} {...details} />
                ))}
            </section>
            <section id="education">
                <h2>{t('experience.education.header')}</h2>
                <div className="education-container">
                    {education.map((details) => (
                        <EducationCard key={details.id} {...details} />
                    ))}
                </div>
            </section>
        </main>
    );
}
