import { faChevronDown, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function Hero() {
    return (
        <section className="hero">
            <h2 className="hero-name">Carlos Cardona</h2>
            <div className="hero-heading">
                <h1 className="heading">Reskilled astrophysicist</h1>
                <h1 className="heading">Passionate programmer</h1>
            </div>
            <div className="hero-picture">
                <FontAwesomeIcon icon={faUser} id="profile-picture" />
            </div>
            <div className="hero-subheading">
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
            <div className="call-to-action">
                <button id="go-to-contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Leave a message</span>
                </button>
                <button id="read-more">
                    <span>Read more</span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>

            {/* <img src="" alt="This is me!" id="profile-picture" /> */}
        </section>
    );
}
