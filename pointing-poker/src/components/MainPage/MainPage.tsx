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
  const { isConnectForm } = useSelector((state: RootState) => state.dataConnectForm);

  const onShowConnectForm = () => {
    dispatch(showConnectForm(!isConnectForm));
  };

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
          <p className="create-session-text">Create session:</p>
          <Button
            color={whiteColor}
            mainPage
            colorBG={blueColor}
            text=" Start new game"
            onClick={onShowConnectForm}
          />
        </div>
        <div>OR:</div>
        <p className="connect__text">
          Connect to lobby by <b style={{ color: '#66999B' }}>URL</b>:
        </p>
        <div className="flex-box">
          <input type="text" />
          <Button
            color={whiteColor}
            mainPage
            colorBG={blueColor}
            text="Connect"
            onClick={onShowConnectForm}
          />
        </div>
      </section>
      {isConnectForm && <ConnectPopup />}
    </StyleMainPage>
  );
};

export default MainPage;
