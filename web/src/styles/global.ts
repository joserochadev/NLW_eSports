import { createGlobalStyle } from 'styled-components'

import bg from '../assets/background-nlw-esports.png'

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Inter', sans-serif;

    }

    button{
        border: none;
        cursor: pointer;
        transition: all .2ms;
    }

    button:hover{
        opacity: .8;
    }

    body{
        /* max-height: 100vh; */
        height: 100%;
        background: #131216;
        background: url(${bg}) no-repeat;
        background-size: cover;
    }
`