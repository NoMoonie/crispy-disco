import styled from "styled-components";

const BoxFront = styled.div`
    color: ${(props) => props.theme.page.textColor};
    background-color: hsl(341, 96%, 65%, 0.2);
    display: grid;
    place-content: center;
    h1,
    h2 {
        font-size: 60pt;
    }
`;

const FlipBoxFront = () => {
    return (
        <BoxFront className="flip-box-front">
            <h2>Hello!</h2>
            <br />
            <hr />
            <br />
            <h1>Who am i?</h1>
        </BoxFront>
    );
};

export default FlipBoxFront;
