import styled from 'styled-components';
import Chat from './components/Chat/Chat';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import GlobalStyle from './components/GlobalStyle/StyledGlobal';
import { connectToSocket } from './sockets/Sockets';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const App = () => {
  connectToSocket();
  return (
    <StyledApp>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <Chat />
      <Body />
      <Footer />
    </StyledApp>
  );
};

export default App;
