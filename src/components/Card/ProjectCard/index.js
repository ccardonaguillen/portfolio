import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import devItems from '../../../assets/devicons';
import StyledCard from '..';

import './style.css';

export default function ProjectCard(props) {
    const { id, repository, live, preview, icon, techStack, otherTools } = props;
    const { t } = useTranslation();

    return (
        <StyledCard className="card project">
            <div className="heading">
                <FontAwesomeIcon icon={icon} className="project-icon" />
                <h3 className="title">{t(`projects.${id}.title`)}</h3>
                <div className="icon-container">
                    {techStack.map((item) => (
                        <img
                            key={item}
                            src={devItems[item]?.icon}
                            alt={devItems[item]?.title}
                            title={devItems[item]?.title}
                            className="dev-icon"
                        />
                    ))}
                </div>
            </div>
            <div className="content">
                <img src={preview} alt="preview" className="preview" />
                <p className="description">{t(`projects.${id}.description`)}</p>
            </div>

            <div className="footer">
                <a
                    href={live || 'https://ccardonaguillen.github.io/' + repository}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t('projects.card.live')}
                    <FontAwesomeIcon icon={faLink} />
                </a>
                <a
                    href={'https://github.com/ccardonaguillen/' + repository}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t('projects.card.source')}
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </StyledCard>
    );
}
