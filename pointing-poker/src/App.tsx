import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle/StyledGlobal';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
