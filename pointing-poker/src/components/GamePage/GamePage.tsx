import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { blue } from '../GlobalStyle/StyledGlobal';
import IssuesBlock from '../IssuesBlock/issuesBlock';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import { ScramMaster } from '../ScramMasterBlock/ScramMasterBlock';
import Timer from '../Timer/Timer';
import { StyledGamePage } from './StyledGamePage';
import RoundResult from '../RoundResult/RoundResult';

const GamePage = () => {
  return (
    <StyledGamePage>
      <div className="flex-box">
        <section className="info">
          <LobbyHeaderBlock />
          <div className="scram-master-container">
            <div className="flex-box">
              <ScramMaster />
              <div className="stop-game-btn">
                <Link to="/">
                  <Button text="Stop Game" colorBG="#fff" color={blue}></Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="issues-container">
            <div className="flex-box">
              <IssuesBlock />
              <div className="timer-block">
                <Timer />
                <Button text="Run Round" color="#fff" colorBG={blue} />
              </div>
            </div>
          </div>
        </section>
        <div className="strip"></div>
        <RoundResult />
      </div>
    </StyledGamePage>
  );
};

export default GamePage;
