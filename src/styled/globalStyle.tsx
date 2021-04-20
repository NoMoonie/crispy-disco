import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Helvetica, Sans-serif;
    }
    body{
        background-color: #110a1a;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        user-select: none;
    }

   
`;
export default GlobalStyle; 