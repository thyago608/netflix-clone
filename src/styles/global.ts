import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --background: #111;
        --text-white:#fff;
    }

    html{
        @media(max-width:800px){
            font-size: 87.5%;
        }

       @media(max-width: 1120px){
           font-size: 93.75%;   
       }
    }

    body{
        background-color: var(--background);
        color: var(--text-white);
        font-family: 'Roboto', sans-serif;
    }

    img{
        width:100%;
        height: 100%;
    }

`;