import './style.css';
import StyledCard from '..';

export default function EducationCard(props) {
    const { logo, title, startDate, endDate, location, notes } = props;

    return (
        <StyledCard className="education">
            <div class="heading">
                <img src={logo} alt="" className="logo" />
                <h3 className="title">{title}</h3>
                <em className="location">{location}</em>
                <span className="dates">
                    {startDate} &ndash; {endDate || 'Present'}
                </span>
            </div>
            <div class="content">
                <ul className="notes">
                    {notes.map((item) => (
                        <li key={item}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledCard>
    );
}
