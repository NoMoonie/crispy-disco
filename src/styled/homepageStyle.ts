import styled, { keyframes } from "styled-components";

const top = keyframes`
    from{
        transform: translateY(-300%);
    }
`;

export const Box1 = styled.div`
    border-radius: 10px;
    grid-row: 2/2;
    display: grid;
    place-content: center;
    cursor: default;
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
        border-bottom: 1px solid ${(props) => props.theme.main.scbg};
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
        z-index: -1;
    }
`;

export const Box2inner = styled.div`
    background-color: ${(porps) => porps.theme.main.bg};
    border: ${(porps) => porps.theme.main.border};
    border-radius: 10px;
    padding: 2em;
    p {
        padding-top: 1em;
    }
`;
