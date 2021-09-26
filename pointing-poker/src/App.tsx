import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import GlobalFonts from './components/GlobalStyle/GlobalFonts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';
import GlobalStyle from './components/GlobalStyle/StyledGlobal';
import { RootState } from './redux';
import ConnectForm from './components/Forms/ConnectForm';
import CreateIssueForm from './components/Forms/CreateIssueForm';
import Chat from './components/Chat/Chat';
import { jonedNotification } from './sockets/SocketsAPI';
// import DeleteUser from './components/DeleteUser/DeleteUser';
import MiniGame from './components/MiniGame/MiniGame';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const { isConnectForm, isIssuesForm } = useSelector((state: RootState) => state.showForms);
  const { isOpen } = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();
  useEffect(() => {
    jonedNotification(dispatch);
  }, []);
  // window.onclick = () => {
  //   const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
  //   console.log(
  //     animals.filter((el) => {
  //       if (el !== 'camel') {
  //         return el;
  //       }
  //     }),
  //   );
  // };

  return (
    <BrowserRouter>
      <StyledApp className="project-container">
        <GlobalFonts />
        <GlobalStyle />
        <Header />
        {isOpen ? <Chat /> : null}
        <MiniGame />
        <Body />
        <Footer />
        {isConnectForm && <ConnectForm />}
        {isIssuesForm && <CreateIssueForm />}
      </StyledApp>
    </BrowserRouter>
  );
};

export default App;
