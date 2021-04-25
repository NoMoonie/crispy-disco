import styled from "styled-components";

const BoxFront = styled.div`
    color: ${(props) => props.theme.main.textColor};
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
            <h2>Welcome!</h2>
            <br />
            <hr />
        </BoxFront>
    );
};

export default FlipBoxFront;
