import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
// import Chat from './components/Chat/Chat';
import { useSelector } from 'react-redux';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import GlobalStyle from './components/GlobalStyle/StyledGlobal';
import { connectToSocket } from './sockets/SocketsAPI';
import { RootState } from './redux';
import ConnectForm from './components/Forms/ConnectForm';
import CreateIssueForm from './components/Forms/CreateIssueForm';
import Chat from './components/Chat/Chat';
// import DeleteUser from './components/DeleteUser/DeleteUser';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const App = () => {
  connectToSocket();
  const { isConnectForm, isIssuesForm } = useSelector((state: RootState) => state.showForms);

  return (
    <BrowserRouter>
      <StyledApp>
        <GlobalFonts />
        <GlobalStyle />
        <Header />
        {/* <Chat /> */}
        {/* <DeleteUser /> */}
        <Body />
        <Footer />
        {isConnectForm && <ConnectForm />}
        {isIssuesForm && <CreateIssueForm />}
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
