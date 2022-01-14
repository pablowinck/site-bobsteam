import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }

    @media (max-width: 1000px) {
        html {
            font-size: 14px;
        }
    }

    @media (max-width: 650px) {
        html {
            font-size: 12px;
        }
    }

   
`;
