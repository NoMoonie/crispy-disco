import styled from "styled-components";

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
