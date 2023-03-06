import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faDownload, faGears, faSchool } from '@fortawesome/free-solid-svg-icons';

import EducationCard from '../../components/Card/EducationCard';
import ExperienceCard from '../../components/Card/ExperienceCard';

import workExperience from '../../assets/lists/workExperience';
import education from '../../assets/lists/education';

import './style.css';

export default function Experience() {
    return (
        <main id="experience">
            <section className="hero">
                <h1 className="hero-heading">"Not all those who wander are lost"</h1>
                <p className="hero-subheading">
                    Keep reading to check where my journey has taken me through a short but windy
                    path
                </p>
                <div className="call-to-action">
                    {/* <button id="go-to-edcuation">
                        <FontAwesomeIcon icon={faSchool} />

                        <span>My education</span>
                    </button> */}
                    <button id="download-resume">
                        <span>Download full resumé</span>
                        <FontAwesomeIcon icon={faDownload} />
                    </button>
                </div>
            </section>
            <section id="work">
                {workExperience.map((details) => (
                    <ExperienceCard key={details.title} {...details} />
                ))}
            </section>
            <section id="education">
                <h2>Education</h2>
                <div className="education-container">
                    {education.map((details) => (
                        <EducationCard key={details.title} {...details} />
                    ))}
                </div>
            </section>
        </main>
    );
}
