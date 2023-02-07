import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './style.css';

export default function NavItem({ icon, title, to }) {
    return (
        <li className="nav-item-container">
            <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                <FontAwesomeIcon icon={icon} />
                <p>{title}</p>
            </NavLink>
        </li>
    );
}
