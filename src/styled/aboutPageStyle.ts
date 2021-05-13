import styled from "styled-components";

export const ProfilePic = styled.div`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
    width: 100%;
    height: 20%;
    border-bottom: ${(props) => props.theme.main.border};
    svg {
        width: 100%;
        height: 90%;
        transform: scale(0.8);
    }
    .name {
        position: absolute;
        bottom: 0.2em;
        left: 0.2em;
    }
`;

export const Box1 = styled.div`
    background-color: ${(porps) => porps.theme.main.bg};
    /* border: 1px solid ${(props) => props.theme.main.scAccent}; */
    border-radius: 10px;
    overscroll-behavior: contain;
    section {
        padding: 1em;
        display: grid;
        gap: 1em;
    }
    @media (min-width: 870px) {
        grid-row: 1/5;
        order: 0;
    }
    @media (max-width: 870px) {
        order: 6;
    }
`;

export const Box2 = styled.div<{ top?: boolean }>`
    background-color: ${(porps) => porps.theme.main.bg};
    /* border: 1px solid ${(props) => props.theme.main.scAccent}; */
    border-radius: 10px;
    padding: 1em;
    overscroll-behavior: contain;
    overflow: auto;
    svg {
        height: 40px;
        width: 40px;
    }
    h1 {
        color: ${(props) => props.theme.main.scbg};
    }
    @media (min-width: 870px) {
        grid-row: 3/5;
    }
`;
