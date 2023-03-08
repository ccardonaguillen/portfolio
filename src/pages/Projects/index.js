import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChessBoard, faEarthEurope, faChess } from '@fortawesome/free-solid-svg-icons';

import { apps, games } from '../../assets/lists/projects';
import ProjectCard from '../../components/Card/ProjectCard';

import './style.css';

export default function Projects() {
    const [category, setCategory] = useState('all');
    const projectList = { all: apps.concat(games), apps, games };
    projectList['featured'] = projectList.all.filter((item) => item.featured);

    function handleChangeCategory(e) {
        const newCategory = e.target.value;

        setCategory(newCategory);
    }

    return (
        <main id="projects">
            <div id="category-selector">
                <CategoryButton
                    id="all"
                    currCategory={category}
                    onCategoryChanged={handleChangeCategory}
                />
                <CategoryButton
                    id="featured"
                    icon={faStar}
                    currCategory={category}
                    onCategoryChanged={handleChangeCategory}
                />
                <CategoryButton
                    id="apps"
                    icon={faEarthEurope}
                    currCategory={category}
                    onCategoryChanged={handleChangeCategory}
                />
                <CategoryButton
                    id="games"
                    icon={faChessBoard}
                    currCategory={category}
                    onCategoryChanged={handleChangeCategory}
                />
            </div>
            <div className="projects-container">
                {projectList[category].map((details) => (
                    <ProjectCard key={details.id} {...details} />
                ))}
            </div>
        </main>
    );
}

function CategoryButton({ id, icon, currCategory, onCategoryChanged }) {
    const { t } = useTranslation();

    return (
        <div className={'category-container' + (currCategory === id ? ' selected' : '')}>
            <input type="radio" name="category" value={id} id={id} onClick={onCategoryChanged} />
            <label htmlFor={id}>
                <FontAwesomeIcon icon={icon} />
                {t(`projects.categories.${id}`)}
            </label>
        </div>
    );
}
