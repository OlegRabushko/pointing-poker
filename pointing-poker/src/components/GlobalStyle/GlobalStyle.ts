import { createGlobalStyle } from 'styled-components';

export const blue = '#fff';

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

html {
    width: 100%;
    height: 100%;
}

body {
  width: 100%;
  height: 100%;
  font-family: 'Roboto';
}

#root {
  width: 100%;
  height: 100%;
  max-width: 1480px;
  margin: 0 auto;
  padding: 0 20px;
}
`;

export default GlobalStyle;
