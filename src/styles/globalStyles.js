import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   

    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    body {
    font-size: 1.5rem;
  
    font-family:  'Outfit',sans-serif;
    background-color: hsl(212, 45%, 89%);
    padding: 2rem;
    display: flex ;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    }
`;

export default GlobalStyle;
