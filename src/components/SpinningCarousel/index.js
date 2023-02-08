import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, Children, cloneElement } from 'react';

import './style.css';

export default function SpinningCarousel({ children }) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const length = Children.count(children);

    const slideClass = (idx) => {
        switch (idx - activeIdx) {
            case 0:
                return 'active';
            case -1:
                return 'prev';
            case 1:
                return 'next';

            default:
                return 'inactive';
        }
    };

    function handleNextSlide() {
        setActiveIdx((currIndex) => (currIndex < length - 1 ? currIndex + 1 : 0));
    }

    function handlePrevSlide() {
        setActiveIdx((currIndex) => (currIndex > 0 ? currIndex - 1 : length - 1));
    }

    function handlePauseCarousel() {
        setIsPaused(true);
    }

    function handleResumeCarousel() {
        setIsPaused(false);
    }

    return (
        <div className="carousel">
            <FontAwesomeIcon
                icon={faChevronLeft}
                className="carousel-controls prev"
                onClick={handleNextSlide}
            />
            <div
                className="carousel-contents"
                onMouseEnter={handlePauseCarousel}
                onMouseLeave={handleResumeCarousel}
            >
                {Children.map(children, (child, idx) => {
                    let slideIdx = idx - activeIdx;
                    slideIdx = slideIdx >= 0 ? slideIdx : slideIdx + length;

                    const angleDeg = (360 / length) * slideIdx;
                    const opacity = Math.abs(1 - slideIdx / (length / 2)) + 0.2;
                    const duration = 40;
                    const delay = duration * Math.abs(slideIdx / length);

                    return cloneElement(child, {
                        key: idx,
                        className: 'slide ' + slideClass(idx, activeIdx),
                        style: {
                            opacity,
                            transform: `rotateY(${angleDeg}deg)  translateZ(${17 * length}px) `,
                            animation: `fade ${duration}s linear infinite`,
                            animationDelay: `-${delay}s`,
                            animationPlayState: isPaused ? 'paused' : '',
                        },
                    });
                })}
            </div>
            <FontAwesomeIcon
                icon={faChevronRight}
                className="carousel-controls next"
                onClick={handlePrevSlide}
            />
        </div>
    );
}
