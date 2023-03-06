import styled from 'styled-components';

const HeroStyle = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15rem 0;

    & > .heading {
        font-size: 4rem;
        font-weight: 600;
    }

    & > .subheading {
        margin: 1.5rem 0;
        font-size: 1.6rem;
        line-height: 3rem;
    }

    & > .call-to-action {
        display: flex;
        gap: 1rem;
    }

    & button {
        appearance: none;
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 0.75rem;
        padding: 1rem 2.5rem;
        border: 2px solid black;
        border-radius: 3rem;
        font-size: 1.5rem;
        font-weight: 500;
        cursor: pointer;
    }

    & button:hover {
        background-color: lightblue;
    }

    & button > svg {
        height: 1.5rem;
    }

    @media screen and (max-width: 1000px) {
        & {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        & > .call-to-action {
            flex-direction: column;
        }
    }
`;

export default function HeroSection(props) {
    const { heading, subheading, cta, children } = props;
    return (
        <HeroStyle className="hero">
            <div className="heading">{heading}</div>
            <div className="subheading">{subheading}</div>
            <div className="call-to-action">{cta}</div>
            {children}
        </HeroStyle>
    );
}
