import styled from 'styled-components';

const sectionGridAreas = {
    center: "'heading heading' 'decoration decoration' 'content content'",
    right: "'decoration heading' 'decoration content'",
    left: "'heading decoration' 'content decoration'",
};

const SectionStyle = styled.section`
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: ${(props) => sectionGridAreas[props.alignment]};
    row-gap: 4rem;
    column-gap: 10rem;
    justify-items: center;
    align-items: center;
    margin: 10rem 0;
    line-height: 2.5rem;

    & > .heading {
        grid-area: heading;
        font-size: 2.6rem;
        text-transform: uppercase;
    }

    & > .decoration {
        grid-area: decoration;
        width: min(400px, 30vw);
        height: 350px;
        border: 1px solid black;
        border-radius: 5px;
    }

    & > .content {
        grid-area: content;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.5rem;
        text-align: justify;
    }

    @media screen and (max-width: 1000px) {
        & {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        & > .decoration {
            width: min(600px, 70vw);
            height: 250px;
        }
    }
`;

export default function TextSection({ id, alignment, heading, decoration, children }) {
    return (
        <SectionStyle id={id} alignment={alignment}>
            <div className="heading">
                <h3>{heading}</h3>
            </div>
            <div className="decoration">{decoration}</div>
            <div className="content">{children}</div>
        </SectionStyle>
    );
}
