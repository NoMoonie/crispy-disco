import styled, { keyframes } from "styled-components";

const left = keyframes`
    from{
        transform: translateX(-100%);
    }
`;

const top = keyframes`
    from{
        transform: translateY(-100%);
    }
`;

const bottom = keyframes`
    from{
        transform: translateY(100%);
    }
`;

export const ProfilePic = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    width: 100%;
    height: 20%;
    background-color: ${(props) => props.theme.main.bgAccent};
    svg {
        position: absolute;
        top: 20px;
        height: 200px;
    }
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
    animation: ${left} 700ms forwards;
`;

export const Box2 = styled.div<{ top?: boolean }>`
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
    animation: ${(props) => (props.top ? top : bottom)} 900ms ease;
`;
