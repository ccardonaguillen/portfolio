import * as React from 'react';

export default function FlagUK() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 30" width="100%">
            <clipPath id="a">
                <path d="M0 0v30h45V0z" />
            </clipPath>
            <clipPath id="b">
                <path d="M22.5 15H45v15zv15H0zH0V0zV0H45z" />
            </clipPath>
            <g clipPath="url(#a)">
                <path d="M0 0v30h45V0z" fill="#012169" />
                <path d="m0 0 45 30m0-30L0 30" stroke="#fff" strokeWidth={6} />
                <path
                    d="m0 0 45 30m0-30L0 30"
                    clipPath="url(#b)"
                    stroke="#C8102E"
                    strokeWidth={4}
                />
                <path d="M22.5 0v30M0 15h45" stroke="#fff" strokeWidth={10} />
                <path d="M22.5 0v30M0 15h45" stroke="#C8102E" strokeWidth={6} />
            </g>
        </svg>
    );
}
