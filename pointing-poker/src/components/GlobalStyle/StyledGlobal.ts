import { createGlobalStyle } from 'styled-components';

export const blue = '#2B3A67';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'Roboto';
    font-style: normal;
}

*::before,
*::before {
  box-sizing: inherit;
}

 ul {
  list-style-type: none;
}

a {
  text-decoration: none !important;
}

`;
export default GlobalStyle;
