import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './style.css';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section id="home-contact">
            <h3 className="heading">{t('home.contact.header')}</h3>
            <div id="contact-links">
                <a href={'https://github.com/ccardonaguillen/'}>
                    <FontAwesomeIcon icon={faGithub} id="github-logo" alt="Github" />
                </a>
                <a href={'https://www.linkedin.com/in/ccardonaguillen/'}>
                    <FontAwesomeIcon icon={faLinkedin} id="github-logo" alt="Github" />
                </a>
            </div>
            <p>{t('home.contact.subheading')}</p>
            <form id="contact-message" onSubmit={() => false}>
                <div>
                    {/* <label htmlFor="name">Name</label> */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder={t('home.contact.form.name')}
                        required={true}
                        autoComplete="off"
                    ></input>
                </div>
                <div>
                    {/* <label htmlFor="email">Email adress</label> */}
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t('home.contact.form.email')}
                        required={true}
                        autoComplete="off"
                    ></input>
                </div>
                <div>
                    {/* <label htmlFor="message">Your message</label> */}
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder={t('home.contact.form.message')}
                        required={true}
                        autoComplete="off"
                    ></textarea>
                </div>
                <button type="submit" id="send-message">
                    <p>{t('home.contact.form.send')}</p>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </form>
        </section>
    );
}
