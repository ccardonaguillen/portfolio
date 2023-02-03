import React from 'react';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeading,
    faBriefcase,
    faC,
    faCircleInfo,
    faHouse,
    faLaptopCode,
    faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import './style.css';
import NavItem from '../../components/NavItem';
import LangButton from '../../components/LangButton';
import FlagSpain from '../../assets/flags/spain';
import FlagUK from '../../assets/flags/uk';

export default function Header() {
    const { t } = useTranslation();
    return (
        <div id="header">
            <div className="container">
                <nav id="nav-items">
                    <ul>
                        <NavItem icon={faHouse} title={t('navItems.home')} />
                        <NavItem icon={faCircleInfo} title={t('navItems.about')} />
                        <NavItem icon={faBriefcase} title={t('navItems.experience')} />
                        <NavItem icon={faLaptopCode} title={t('navItems.projects')} />
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
        </div>
    );
}
