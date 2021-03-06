import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --brow-hood: #352208;
        --gold-50: #E1BB80;
        --white-honey: #EAF2E3;
        --white-default: #fff;
        --black-default: #000;
        --gray-50: #cfcfcf;
        --red-50: #ff9673;
    }

    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: black;
    }

    
`;

export default GlobalStyle;
