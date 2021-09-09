import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import SettingPage from '../SettingPage/SettingPage';
import { StyleBody } from './body.styled';

const Body = () => {
  return (
    <BrowserRouter>
      <StyleBody>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/settings" component={SettingPage} />
        </Switch>
      </StyleBody>
    </BrowserRouter>
  );
};

export default Body;
