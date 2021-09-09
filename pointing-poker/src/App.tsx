import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

const App = () => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyle />
      <Header />
      <Chat />
      <Body />
      <Footer />
      {/* <UserCard />
      <IssueCard />
      <AddIssueCard />
      <ScoreCard />
      <GameCard />
      <AddCard /> */}
    </>
  );
};

export default App;
