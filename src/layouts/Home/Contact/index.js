import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './style.css';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
    return (
        <section id="home-contact">
            <h3 className="section-heading">Find me on</h3>
            <div id="contact-links">
                <a href={'https://github.com/ccardonaguillen/'}>
                    <FontAwesomeIcon icon={faGithub} id="github-logo" alt="Github" />
                </a>
                <a href={'https://www.linkedin.com/in/ccardonaguillen/'}>
                    <FontAwesomeIcon icon={faLinkedin} id="github-logo" alt="Github" />
                </a>
            </div>
            <p>Or you leave a message below and I will get back to go you as soon as possible</p>
            <form id="contact-message" onSubmit={() => false}>
                <div>
                    {/* <label htmlFor="name">Name</label> */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
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
                        placeholder="Email address"
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
                        placeholder="Your message"
                        required={true}
                        autoComplete="off"
                    ></textarea>
                </div>
                <button type="submit" id="send-message">
                    <p>Send</p>
                    <FontAwesomeIcon icon={faEnvelope} />
                </button>
            </form>
        </section>
    );
}
