import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChessBoard, faEarthEurope } from '@fortawesome/free-solid-svg-icons';

import { apps, games } from '../../assets/lists/projects';
import ProjectCard from '../../components/Card/ProjectCard';

import './style.css';

export default function Projects() {
    const [category, setCategory] = useState('featured');
    const projectList = { all: apps.concat(games), apps, games };
    projectList['featured'] = projectList.all.filter((item) => item.featured);

    function handleChangeCategory(e) {
        const newCategory = e.target.value;

        setCategory(newCategory);
    }

    return (
        <main id="projects">
            <div id="category-selector">
                <div className={'category-container' + (category === 'all' ? ' selected' : '')}>
                    <input
                        type="radio"
                        name="category"
                        value="all"
                        id="all"
                        onClick={handleChangeCategory}
                    />
                    <label htmlFor="all">All</label>
                </div>
                <div
                    className={'category-container' + (category === 'featured' ? ' selected' : '')}
                >
                    <input
                        type="radio"
                        name="category"
                        value="featured"
                        id="featured"
                        onClick={handleChangeCategory}
                    />
                    <label htmlFor="featured">
                        <FontAwesomeIcon icon={faStar} />
                        Featured
                    </label>
                </div>

                <div
                    className={'category-container' + (category === 'apps' ? ' selected' : '')}
                    data-key="apps"
                >
                    <input
                        type="radio"
                        name="category"
                        value="apps"
                        id="web-apps"
                        onClick={handleChangeCategory}
                    />
                    <label htmlFor="web-apps">
                        {' '}
                        <FontAwesomeIcon icon={faEarthEurope} />
                        Web-apps
                    </label>
                </div>
                <div className={'category-container' + (category === 'games' ? ' selected' : '')}>
                    <input
                        type="radio"
                        name="category"
                        value="games"
                        id="games"
                        onClick={handleChangeCategory}
                    />
                    <label htmlFor="games">
                        <FontAwesomeIcon icon={faChessBoard} />
                        Browser games
                    </label>
                </div>
            </div>
            <div className="projects-container">
                {projectList[category].map((details) => (
                    <ProjectCard key={details.repository} {...details} />
                ))}
            </div>
        </main>
    );
}
