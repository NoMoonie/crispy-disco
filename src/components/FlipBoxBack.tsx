import styled from "styled-components";
import Button from "components/Button";

const BoxBack = styled.div`
    background-color: ${(props) => props.theme.page.bg};
    color: ${(props) => props.theme.page.textColor};
    transform: rotateY(180deg);
    display: grid;
    grid-template-columns: 1fr;
    border: ${(props) => props.theme.page.border};
`;

const BoxButtonWrapper = styled.div`
    display: flex;
    border: ${(props) => props.theme.page.border};
    justify-content: space-evenly;
    align-items: center;
    margin: 5px;
    border-radius: 10px;
    @media (max-width: 1440px) {
        display: none;
    }
`;

const BoxBackinner = styled.article`
    display: grid;
    place-content: center;
    text-align: left;
    overflow: auto;
    padding-right: 1em;
    padding-left: 1em;
`;

const FlipBoxBack = () => {
    return (
        <BoxBack className="flip-box-back">
            <BoxBackinner>
                <h2>Who am i</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore laboriosam
                    doloribus nam! Unde nobis, deserunt necessitatibus delectus praesentium ipsum
                    qui. Qui ad vero fugit tenetur! Voluptate totam veritatis dolore ea nihil.
                    Beatae consequatur blanditiis voluptatibus nesciunt officiis dolores debitis,
                    aliquam quod asperiores, fugit, voluptates ab expedita obcaecati. Veritatis,
                    iste nihil reiciendis natus ut fugit autem, ab odio ad possimus corporis
                    eligendi. Recusandae officia modi, cum cupiditate dignissimos sunt fuga nulla
                    quaerat sequi eius et eligendi alias fugiat pariatur eum rerum, optio nostrum.
                    Ratione neque fuga minus. Eaque, temporibus dolores molestias impedit asperiores
                    totam laudantium minima iste officiis. Facilis, dolore esse.
                </p>
            </BoxBackinner>
            <BoxButtonWrapper>
                <Button link="/gallery">Gallery</Button>
                <Button link="/projekts">Projekts</Button>
                <Button link="/about">About(CV)</Button>
            </BoxButtonWrapper>
        </BoxBack>
    );
};

export default FlipBoxBack;
