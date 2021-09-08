import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import GamePage from '../GamePage/GamePage';
import LobbyPage from '../LobyPage/LobbyPage';
import MainPage from '../MainPage/MainPage';
import SettingPage from '../SettingPage/SettingPage';
import { StyleBody } from './StyledBody';

const Body = () => {
  const [gameWrapperStyle, setGameWrapperStyle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/game') {
      setGameWrapperStyle(true);
    } else {
      setGameWrapperStyle(false);
    }
  }, [location.pathname]);

  return (
    <StyleBody gameWrapperStyle={gameWrapperStyle}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/settings" component={SettingPage} />
        <Route exact path="/lobby" component={LobbyPage} />
        <Route exact path="/game" component={GamePage} />
      </Switch>
    </StyleBody>
  );
};

export default Body;
