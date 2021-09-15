import { useDispatch, useSelector } from 'react-redux';
import cards from '../../assets/icons/cards-ico.svg';
import { RootState } from '../../redux';
import { showConnectForm } from '../../redux/FormRedux/FormActions';
import Button from '../Button/Button';
import ConnectPopup from '../Forms/ConnectForm';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { StyleMainPage } from './StyledMainPage';

const MainPage = () => {
  const dispatch = useDispatch();
  const { isConnectForm } = useSelector((state: RootState) => state.showForms);

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
          <Button
            color={whiteColor}
            mainPage
            colorBG={blueColor}
            text=" Start new game"
            onClick={() => dispatch(showConnectForm(!isConnectForm))}
          />
        </div>
        <div>OR:</div>
        <p className="connect__text">
          Connect to lobby by <b style={{ color: '#66999B' }}>URL</b>:
        </p>
        <div className="flex-box">
          <input className="started-page-url" />
          <Button
            color={whiteColor}
            mainPage
            colorBG={blueColor}
            text="Connect"
            onClick={() => dispatch(showConnectForm(!isConnectForm))}
          />
        </div>
      </section>
      {isConnectForm && <ConnectPopup />}
    </StyleMainPage>
  );
};

export default MainPage;
