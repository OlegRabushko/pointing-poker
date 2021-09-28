import { Route, Switch } from 'react-router-dom';
import GamePage from '../GamePage/GamePage';
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
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/results" component={ResultsPage} />
      </Switch>
    </StyleBody>
  );
};

export default Body;
