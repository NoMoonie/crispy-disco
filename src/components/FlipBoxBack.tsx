import styled from "styled-components";
import { BoxButton } from "styled/styledcomp";

const BoxBack = styled.div`
    background-color: ${(props) => props.theme.page.bg};
    color: ${(props) => props.theme.page.textColor};
    transform: rotateY(180deg);
    display: grid;
    grid-template-columns: 1fr;
`;

const BoxButtonWrapper = styled.div`
    background-color: ${(props) => props.theme.page.bgAccent};
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 5px;
    border-radius: 10px;
    @media (max-width: 768px) {
        display: none;
    }
`;

const BoxBackinner = styled.article`
    display: grid;
    place-content: center;
    margin: 20px;
    text-align: left;
    p {
        margin-top: 20px;
        word-wrap: inherit;
    }
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
                <BoxButton>Photos</BoxButton>
                <BoxButton>Projekts</BoxButton>
                <BoxButton>CV</BoxButton>
            </BoxButtonWrapper>
        </BoxBack>
    );
};

export default FlipBoxBack;
