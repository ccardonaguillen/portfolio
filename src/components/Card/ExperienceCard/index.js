import { useTranslation } from 'react-i18next';

import devItems from '../../../assets/devicons';
import StyledCard from '..';

import './style.css';

export default function ExperienceCard(props) {
    const { id, logo, location, competences } = props;
    const { t } = useTranslation();

    return (
        <StyledCard className="experience">
            <div className="heading">
                <img src={logo} alt="" className="logo" />
                <h3 className="title">{t(`experience.work.${id}.title`)}</h3>

                <em className="location">{location}</em>
                <span className="dates">
                    {t(`experience.work.${id}.startDate`)} &ndash;{' '}
                    {t(`experience.work.${id}.endDate`) || t('common.present')}
                </span>
            </div>
            <div className="content">
                <p className="description">{t(`experience.work.${id}.description`)}</p>
            </div>
            <div className="footer">
                <div className="competence-container">
                    {competences.map((skill) => (
                        <div key={skill} className="competence">
                            <img alt={skill} src={devItems[skill].icon} />
                            <p>{devItems[skill].title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </StyledCard>
    );
}
