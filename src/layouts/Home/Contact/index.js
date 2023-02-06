import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './style.css';

export default function Contact() {
    return (
        <section id="home-contact">
            <p>You can find me on</p>
            <a href={'https://github.com/ccardonaguillen/'}>
                <FontAwesomeIcon icon={faGithub} id="github-logo" alt="Github" />
            </a>
            <a href={'https://www.linkedin.com/in/ccardonaguillen/'}>
                <FontAwesomeIcon icon={faLinkedin} id="github-logo" alt="Github" />
            </a>
            <p>
                Or you can leave a message below and I will get back to go you as soon as possible
            </p>
            <form id="contact-message" onSubmit={() => false}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required={true}></input>
                </div>
                <div>
                    <label htmlFor="email">Email adress</label>
                    <input type="email" id="email" name="email" required={true}></input>
                </div>
                <div>
                    <label htmlFor="message">Your message</label>
                    <textarea id="message" name="message" required={true}></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
}
