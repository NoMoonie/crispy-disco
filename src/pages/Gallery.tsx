import styled from "styled-components";

const GalleryStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 240px;
    gap: 1em;
    padding: 1em;
    padding-top: 4em;
    min-height: 100vh;
`;

const Wrapper = styled.div`
    background-position: center;
    background-size: 200%;
    background-repeat: no-repeat;
    background-color: #3223;
    border-radius: 10px;
    &.card-tall {
        grid-row: span 2 / auto;
    }
    &.card-wide {
        grid-column: span 2 / auto;
    }
`;

const Gallery = () => {
    return (
        <GalleryStyle>
            <Wrapper></Wrapper>
            <Wrapper className="card-tall card-wide"></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-tall "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-tall "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper className="card-wide card-tall"></Wrapper>
            <Wrapper className="card-tall"></Wrapper>
            <Wrapper className="card-wide "></Wrapper>
            <Wrapper></Wrapper>
            <Wrapper></Wrapper>
        </GalleryStyle>
    );
};

export default Gallery;
