import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --brow-hood: #352208;
        --gold-50: #E1BB80;
        --white-honey: #EAF2E3;
        --white-default: #fff;
        --black-default: #000;
        --gray-50: #cfcfcf
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html, body{
        width: 100vw;
        height: 100vh;
    }

    button{
        cursor: pointer;
    }

    
`;

export default GlobalStyle;
