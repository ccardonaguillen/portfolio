import './style.css';

export default function EducationCard(props) {
    const { logo, title, startDate, endDate, location, notes } = props;

    return (
        <div className="card education">
            <img src={logo} alt="" className="logo" />
            <h3 className="title">{title}</h3>
            <em className="location">{location}</em>

            <span className="dates">
                {startDate} &ndash; {endDate || 'Present'}
            </span>
            <ul className="notes">
                {notes.map((item) => (
                    <li>
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
