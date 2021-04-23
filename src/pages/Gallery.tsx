import styled from "styled-components";

const GalleryStyle = styled.div`
    color: ${(props) => props.theme.main.textColor};
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 1fr 5fr 1fr;
    height: 100vh;
`;

const Box1 = styled.div`
    grid-column: 2/2;
    grid-row: 2/2;
    background-color: ${(props) => props.theme.main.bg};
    display: grid;
    place-items: center;
    text-align: center;
`;

const Gallery = () => {
    return (
        <GalleryStyle>
            <Box1>
                <h1>
                    Gallery <br /> Comming soon!
                </h1>
            </Box1>
        </GalleryStyle>
    );
};

export default Gallery;
