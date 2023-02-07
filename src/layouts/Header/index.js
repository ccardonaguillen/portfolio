import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeading,
    faBriefcase,
    faCircleInfo,
    faHouse,
    faLaptopCode,
    faBars,
} from '@fortawesome/free-solid-svg-icons';

import './style.css';
import NavItem from '../../components/NavItem';
import LangButton from '../../components/LangButton';
import FlagSpain from '../../assets/flags/spain';
import FlagUK from '../../assets/flags/uk';

export default function Header() {
    const { t } = useTranslation();
    const [isMenuHidden, setIsMenuHidden] = useState(false);

    function handleToggleMenu() {
        setIsMenuHidden((currState) => !currState);
    }

    return (
        <header>
            <div className="container">
                <FontAwesomeIcon icon={faBars} id="menu-toggle" onClick={handleToggleMenu} />
                <nav id="nav-items" className={isMenuHidden ? 'collapse' : ''}>
                    <ul>
                        <NavItem to="/" icon={faHouse} title={t('navItems.home')} />
                        <NavItem to="about" icon={faCircleInfo} title={t('navItems.about')} />
                        <NavItem
                            to="experience"
                            icon={faBriefcase}
                            title={t('navItems.experience')}
                        />
                        <NavItem to="projects" icon={faLaptopCode} title={t('navItems.projects')} />
                    </ul>
                </nav>
                <div id="header-controls">
                    <ul>
                        <li className="button-container">
                            <LangButton lang="en">
                                <FlagUK />
                            </LangButton>
                            <LangButton lang="es">
                                <FlagSpain />
                            </LangButton>
                        </li>
                        {/* <NavItem icon={faUpRightFromSquare} title="Go To" /> */}
                    </ul>
                </div>
            </div>
        </header>
    );
}
