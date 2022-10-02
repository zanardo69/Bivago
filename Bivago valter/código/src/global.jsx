import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body{
        height: 100vh;
        width: 100vw;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        text-rendering: optimizeLegibility;
    }

    html{
        font-size: 62.5%
    }

    #root{
        min-height: 100%;
        min-width: 100%;
        
    }
`

export default GlobalStyle;