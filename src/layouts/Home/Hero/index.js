import React from 'react';
import { faChevronDown, faEnvelope, faTurnDown, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function Hero() {
    return (
        <section id="hero">
            <h2 id="hero-name">Carlos Cardona</h2>
            <div id="hero-heading">
                <h1>Reskilled astrophysicist</h1>
                <h1>Passionate programmer</h1>
            </div>
            <div id="hero-subheading">
                <p className="subheading">
                    Hi, I'm <span className="highlight">Carlos</span>
                </p>
                <p className="subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis. At in
                    tellus integer feugiat scelerisque varius. Nec feugiat in fermentum posuere urna
                    nec tincidunt praesent semper. Eu scelerisque felis imperdiet proin fermentum
                    leo vel orci.
                </p>
            </div>
            <div id="call-to-action">
                <button id="go-to-contact">
                    <FontAwesomeIcon icon={faEnvelope} />

                    <h3>Leave a message</h3>
                </button>
                <button id="read-more">
                    <h3>Read More</h3>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
            <div id="hero-picture">
                <FontAwesomeIcon icon={faUser} id="profile-picture" />
            </div>
            {/* <img src="" alt="This is me!" id="profile-picture" /> */}
        </section>
    );
}
