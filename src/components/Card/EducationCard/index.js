import { useTranslation } from 'react-i18next';

import './style.css';
import StyledCard from '..';

export default function EducationCard(props) {
    const { id, logo, startDate, endDate, location } = props;
    const { t } = useTranslation();
    const notes = t(`experience.education.${id}.notes`, { returnObjects: true });

    return (
        <StyledCard className="education">
            <div class="heading">
                <img src={logo} alt="" className="logo" />
                <h3 className="title">{t(`experience.education.${id}.title`)}</h3>
                <em className="location">{location}</em>
                <span className="dates">
                    {startDate} &ndash; {endDate || 'Present'}
                </span>
            </div>
            <div class="content">
                <ul className="notes">
                    {console.log(t(`experience.education.${id}.description`))}
                    {Object.values(notes).map((item) => (
                        <li key={item}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </StyledCard>
    );
}
