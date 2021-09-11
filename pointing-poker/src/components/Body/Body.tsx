import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamePage from '../GamePage/GamePage';
import LobbyPage from '../LobyPage/LobbyPage';
import MainPage from '../MainPage/MainPage';
import SettingPage from '../SettingPage/SettingPage';
import { StyleBody } from './StyledBody';

const Body = () => {
  return (
    <BrowserRouter>
      <StyleBody>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/settings" component={SettingPage} />
          <Route exact path="/lobby" component={LobbyPage} />
          <Route exact path="/game" component={GamePage} />
        </Switch>
      </StyleBody>
    </BrowserRouter>
  );
};

export default Body;
