import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Credits(props) {
    return (
        <div id="credits">
            <p>Design and code</p>
            <a href={'https://github.com/ccardonaguillen/' + props.project}>
                <FontAwesomeIcon icon={faGithub} id="github-logo" alt="Github" />
            </a>
            <a href="https://github.com/ccardonaguillen">Carlos Cardona</a>
        </div>
    );
}
