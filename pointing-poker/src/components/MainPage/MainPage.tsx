import { Link } from 'react-router-dom';
import cards from '../../assets/icons/cards-ico.svg';
import Button from '../Button/Button';
import { StyleMainPage } from './StyledMainPage';

const MainPage = () => {
  return (
    <StyleMainPage>
      <section className="header">
        <img src={cards} alt="" />
        <div className="poker">Poker</div>
        <div className="strip"></div>
        <div className="planning">Planing</div>
      </section>
      <section className="body">
        <div>Start your planning</div>
        <div className="flex-box">
          <p>Create session:</p>
          <Link to="/settings">
            <Button color="#fff" mainPage colorBG="#2B3A67" text="Start new game" />
          </Link>
        </div>
        <div>OR:</div>
        <p className="connect__text">
          Connect to lobby by <b style={{ color: '#66999B' }}>URL</b>:
        </p>
        <div className="flex-box">
          <input type="text" />
          <Link to="/lobby">
            <Button color="#fff" mainPage colorBG="#2B3A67" text="Connect" />
          </Link>
        </div>
      </section>
    </StyleMainPage>
  );
};

export default MainPage;
