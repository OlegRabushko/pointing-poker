import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import Chat from './components/Chat/Chat';

const App = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Chat />
    </>
  );
};

export default App;
