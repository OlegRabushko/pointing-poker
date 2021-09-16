import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
// import Chat from './components/Chat/Chat';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import GlobalStyle from './components/GlobalStyle/StyledGlobal';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <BrowserRouter>
      <StyledApp>
        <GlobalFonts />
        <GlobalStyle />
        <Header />
        {/* <Chat /> */}
        <Body />
        <Footer />
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
