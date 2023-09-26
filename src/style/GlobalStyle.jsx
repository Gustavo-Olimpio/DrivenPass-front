import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        box-sizing:border-box;
        textarea:focus, input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
}
    }
   `

export default GlobalStyle