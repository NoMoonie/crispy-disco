import styled, { keyframes } from "styled-components";
import pic from "img/Logo.jpg";

const left = keyframes`
    from{
        transform: translateX(-100%);
    }
`;

const right = keyframes`
    from{
        transform: translateX(100%);
    }
`;

export const ProfilePic = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: url(${pic});
    background-size: 55%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    width: 100%;
    height: 20%;
    background-color: ${(props) => props.theme.main.scAccent};
    .name {
        position: absolute;
        bottom: 0.2em;
        left: 0.2em;
    }
`;

export const Box1 = styled.div`
    border-radius: 10px;
    border: ${(props) => props.theme.main.border};
    grid-row: 1/3;
    background-color: ${(props) => props.theme.main.bg};
    margin-left: 10em;
    section {
        border-top: ${(props) => props.theme.main.border};
        padding: 1em;
        display: grid;
        gap: 1em;
    }
    animation: ${left} 1s forwards;
`;

export const Box2 = styled.div`
    border-radius: 10px;
    border: ${(props) => props.theme.main.border};
    grid-column: 2/4;
    background-color: ${(props) => props.theme.main.bg};
    margin-right: 10em;
    svg {
        height: 50px;
        width: 50px;
    }
    h1 {
        display: flex;
        padding: 0.5em;
        p {
            padding-left: 1em;
            margin-top: 0.3em;
        }
    }
    animation: ${right} 1s forwards;
`;
