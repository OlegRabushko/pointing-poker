import styled from 'styled-components';
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
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </StyledApp>
  );
};

export default App;
