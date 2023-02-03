import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeading, faC } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export default function Header() {
    return (
        <div id="header">
            <div class="container">
                <nav id="nav-items">
                    <FontAwesomeIcon icon={faC} /> {/* Placeholder heading icon */}
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Experience</li>
                        <li>All Projects</li>
                    </ul>
                </nav>
                <div id="header-controls">
                    <ul>
                        <li>Go To</li>
                        <li>
                            <button>EN</button>
                            <button>ES</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
