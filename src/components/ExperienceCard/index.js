import devItems from '../../assets/devicons';
import './style.css';

export default function ExperienceCard(props) {
    const { logo, title, startDate, endDate, location, description, competences } = props;
    return (
        <div className="card experience">
            <div className="heading">
                <img src={logo} alt="" className="logo" />
                <h3 className="title">{title}</h3>
                <span className="dates">
                    {startDate} &ndash; {endDate || 'Present'}
                </span>
                <em className="location">{location}</em>
            </div>
            <div className="content">
                <p className="description">{description}</p>
                <div className="competence-container">
                    {competences.map((skill) => (
                        <div key={skill} className="competence">
                            <img alt={skill} src={devItems[skill].icon} />
                            <p>{devItems[skill].title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
