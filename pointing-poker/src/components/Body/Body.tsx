import { Route, Switch } from 'react-router-dom';
import GamePageDealer from '../GamePageDealer/GamePageDealer';
import GamePagePlayer from '../GamePagePlayer/GamePagePlayer';
import LobbyPage from '../LobyPage/LobbyPage';
import MainPage from '../MainPage/MainPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import SettingPage from '../SettingPage/SettingPage';
import { StyleBody } from './StyledBody';

const Body = () => {
  return (
    <StyleBody>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/settings" component={SettingPage} />
        <Route exact path="/lobby" component={LobbyPage} />
        <Route exact path="/game-player" component={GamePagePlayer} />
        <Route exact path="/game-dealer" component={GamePageDealer} />
        <Route exact path="/results" component={ResultsPage} />
      </Switch>
    </StyleBody>
  );
};

export default Body;
