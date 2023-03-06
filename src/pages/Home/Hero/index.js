import { Fragment } from 'react';
import { faChevronDown, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HeroSection from '../../../components/HeroSection';

import './style.css';

export default function Hero() {
    return (
        <HeroSection heading={<Heading />} subheading={<Subheading />} cta={<CallToAction />}>
            <div className="picture">
                <FontAwesomeIcon icon={faUser} id="profile-picture" />
                {/* <img src="" alt="This is me!" id="profile-picture" /> */}
            </div>
        </HeroSection>
    );
}

function Heading() {
    return (
        <Fragment>
            <h2 className="name">Carlos Cardona</h2>
            <h1 className="header">Reskilled astrophysicist</h1>
            <h1 className="header bold">Passionate programmer</h1>
        </Fragment>
    );
}

function Subheading() {
    return (
        <Fragment>
            <p className="subheading">
                Hi, I'm <span className="highlight">Carlos</span>
            </p>
            <p className="subheading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Eget arcu dictum varius duis. At in
                tellus integer feugiat scelerisque varius. Nec feugiat in fermentum posuere urna nec
                tincidunt praesent semper. Eu scelerisque felis imperdiet proin fermentum leo vel
                orci.
            </p>
        </Fragment>
    );
}

function CallToAction() {
    return (
        <Fragment>
            <button id="go-to-contact">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Leave a message</span>
            </button>
            <button id="read-more">
                <span>Read more</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </button>
        </Fragment>
    );
}
