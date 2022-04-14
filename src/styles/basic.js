import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-size: 60%;
    }
    body{
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -webkit-text-shadow: #33333355 0 0 1px;
        text-shadow: #33333355 1 1 1px;
    }
`