import { createGlobalStyle } from "styled-components";
import "img/worldinGlassBottle.png";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'DM Mono', sans-serif;

    }
    body{
        height: 100%;
        background-color: #110a1a;
        overflow: hidden;
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
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: hsl(291, 8%, 34%);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 7%);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #615f5e;
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
export default GlobalStyle;
