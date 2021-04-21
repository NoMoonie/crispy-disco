import styled from "styled-components";
import FlipBoxFront from "components/FlipBoxFront";
import FlipBoxBack from "components/FlipBoxBack";

const FlipBoxStyled = styled.div`
    background-color: transparent;
    width: 60em;
    height: 30em;
    @media (max-width: 768px) {
        width: 30em;
        height: 30em;
    }
    @media (max-width: 320px) {
        width: 19em;
        height: 47em;
        margin-top: 30px;
    }
    perspective: 1000px;
`;
const FlipBoxInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
`;

const FlipBox = () => {
    return (
        <FlipBoxStyled className="flip-box">
            <FlipBoxInner className="flip-box-inner">
                <FlipBoxFront />
                <FlipBoxBack />
            </FlipBoxInner>
        </FlipBoxStyled>
    );
};

export default FlipBox;
