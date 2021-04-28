import styled, { keyframes } from "styled-components";

const top = keyframes`
    from{
        transform: translateY(-300%);
    }
`;

const Whoami = keyframes`
    from{
        transform: translateX(50%);
        opacity: 0;
    }
`;

const title = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50%);
    }
`;

export const Box1 = styled.div`
    border-radius: 10px;
    grid-row: 2/2;
    display: grid;
    place-content: center;
    cursor: default;
`;

export const ButtonWrapper = styled.section`
    padding-top: 1em;
    display: flex;
    gap: 1em;
`;

export const Box1inner = styled.span`
    font-size: 25pt;
    p {
        font-size: 12pt;
        color: ${(props) => props.theme.main.bgAccent};
        margin-top: 1em;
    }
    .one {
        animation: ${top} 700ms ease;
    }
    .two {
        color: ${(props) => props.theme.main.scbg};
        animation: ${top} 900ms ease;
    }
    .three {
        animation: ${top} 1100ms ease;
    }
`;

export const Box2 = styled.div`
    position: relative;
    grid-row: 2/2;
    display: grid;
    place-content: left;
    svg {
        position: absolute;
        bottom: 1em;
        transform: rotate(-15deg) scale(1.5);
    }
`;

export const Box2inner = styled.div`
    z-index: 0;
    background-color: ${(porps) => porps.theme.main.bg};
    border: ${(porps) => porps.theme.main.border};
    border-radius: 10px;
    padding: 2em;
    animation: ${Whoami} 700ms ease;
    h1 {
        animation: ${title} 900ms ease;
    }
    p {
        animation: ${title} 1100ms ease;
        padding-top: 1em;
    }
`;

export const LinkStyle = styled.div`
    user-select: none;
    width: 200px;
    height: 50px;
    font-size: 20pt;
    border: ${(props) => props.theme.button.border};
    color: ${(porps) => porps.theme.button.bg};
    cursor: pointer;
    background: none;
    border-radius: 5px;
    display: grid;
    place-items: center;
    .link {
        display: grid;
        place-items: center;
        height: 100%;
        width: 100%;
        color: ${(porps) => porps.theme.button.bg};
    }
`;
