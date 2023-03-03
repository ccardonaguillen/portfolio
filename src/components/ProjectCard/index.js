import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import devItems from '../../assets/devicons';
import './style.css';

export default function ProjectCard(props) {
    const { name, repository, live, preview, icon, description, techStack, otherTools } = props;

    return (
        <div className="card project">
            <div className="heading">
                <FontAwesomeIcon icon={icon} className="project-icon" />
                <h3 className="title">{name}</h3>
                <div className="tech-stack-container">
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
            <img src={preview} alt="preview" className="preview" />
            <p className="description">{description}</p>
            <div className="links-container">
                <a
                    href={live || 'https://ccardonaguillen.github.io/' + repository}
                    target="_blank"
                    rel="noreferrer"
                >
                    Live version
                    <FontAwesomeIcon icon={faLink} />
                </a>
                <a
                    href={'https://github.com/ccardonaguillen/' + repository}
                    target="_blank"
                    rel="noreferrer"
                >
                    Source code
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </div>
    );
}
