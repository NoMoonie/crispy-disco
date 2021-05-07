import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'DM Mono', sans-serif;
        ::selection{
            color: #fff; 
            background-color:#fc5185;
        }
    }
    body{
        height: 100%;
        background-color: #110a1a;
        overflow-x: hidden;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        user-select: none;
    }
    
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #3133;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #96586B;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #474a4d;
    }

    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-box:hover .flip-box-inner {
        transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-box-front, .flip-box-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        border-radius: 10px; 
    }
`;

export const AnimFix = styled.div`
    -webkit-perspective: 1000;
    perspective: 1000;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
`;

export default GlobalStyle;
