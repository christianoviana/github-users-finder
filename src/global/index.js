import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;  
        font-weight: normal;
    }  

    h1, h2, h3, h4, h5{
        font-weight: bold;
    }

    a{
        text-decoration:none;
    }

    h1{
        font-size: 40px;
    }
    
    h2{
        font-size: 32px;
    }
    
    h3{
        font-size: 24px;
    }
    
    h4{
        font-size: 20px;
    }
    
    h5{
        font-size: 18px;
    }
`;

export default GlobalStyles;