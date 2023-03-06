import devItems from '../../../assets/devicons';
import StyledCard from '..';
import './style.css';

export default function ExperienceCard(props) {
    const { logo, title, startDate, endDate, location, description, competences } = props;
    return (
        <StyledCard className="experience">
            <div className="heading">
                <img src={logo} alt="" className="logo" />
                <h3 className="title">{title}</h3>

                <em className="location">{location}</em>
                <span className="dates">
                    {startDate} &ndash; {endDate || 'Present'}
                </span>
            </div>
            <div className="content">
                <p className="description">{description}</p>
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
