import styled from 'styled-components';

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 3rem 4rem;
    box-shadow: 0px 0px 15px var(--shadow-color);
    border-radius: 3px;

    & > * {
        width: 100%;
    }

    & > .content {
        flex: 1;
        font-size: 1.4rem;
        margin: 2rem 0;
    }

    & .title {
        font-size: 2rem;
    }

    & .dates {
        grid-area: dates;
        font-size: 1.6rem;
        font-weight: 500;
    }

    & .location {
        font-size: 1.5rem;
    }
`;

export default function StyledCard({ className, children }) {
    return <CardStyle className={`card ${className}`}>{children}</CardStyle>;
}
