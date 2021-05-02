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
    grid-row: 1/5;

    section {
        padding: 1em;
        display: grid;
        gap: 1em;
    }
`;

export const Box2 = styled.div<{ top?: boolean }>`
    background-color: ${(porps) => porps.theme.main.bg};
    /* border: 1px solid ${(props) => props.theme.main.scAccent}; */
    border-radius: 10px;
    grid-row: 3/5;
    padding: 1em;
    svg {
        height: 40px;
        width: 40px;
    }
    overflow: auto;
    h1 {
        color: ${(props) => props.theme.main.scbg};
    }
`;
