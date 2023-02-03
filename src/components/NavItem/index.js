import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function NavItem({ icon, title }) {
    return (
        <li className="nav-item-container">
            <FontAwesomeIcon icon={icon} />
            <p>{title}</p>
        </li>
    );
}
