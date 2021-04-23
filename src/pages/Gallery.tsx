import Button from "components/Button";
import styled from "styled-components";

const GalleryStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    height: 100vh;
    @media (max-width: 414px) {
    }
`;

const Box1 = styled.div`
    grid-column: 2/2;
    grid-row: 2/2;
    background-color: ${(props) => props.theme.main.bg};
    display: grid;
    place-items: center;
`;

const Box2 = styled.div`
    grid-column: 2/2;
    grid-row: 3/4;
    display: grid;
    place-items: center;
`;

const Gallery = () => {
    return (
        <GalleryStyle>
            <Box1>
                <h1>Gallery</h1>
            </Box1>
            <Box2>
                <Button link="/" height="2em" width="4em" fontsize="14pt" bold="normal">
                    Home
                </Button>
            </Box2>
        </GalleryStyle>
    );
};

export default Gallery;
