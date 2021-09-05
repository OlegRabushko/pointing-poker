import { createGlobalStyle } from 'styled-components';
import RobotoFont1 from '../../assets/fonts/roboto-v27-latin-regular.woff';
import RobotoFont2 from '../../assets/fonts/roboto-v27-latin-regular.woff2';

const GlobalFonts = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${RobotoFont1}) format('woff2'), 
       url(${RobotoFont2}) format('woff'); 
}
`;
export default GlobalFonts;
