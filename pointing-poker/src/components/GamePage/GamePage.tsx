import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import Timer from '../Timer/Timer';
import { StyledGamePage } from './StyledGamePage';
import resultsIco from '../../assets/icons/results-ico.png';
import RoundResult from '../RoundResult/RoundResult';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import IssuesBlock from '../IssuesBlock/IssuesBlock';
import ScramMaster from '../ScramMaster/ScramMaster';

const GamePage = () => {
  const [openResults, setOpenResults] = useState(false);

  return (
    <StyledGamePage>
      <div className="flex-box">
        <section className="info">
          <LobbyHeaderBlock />
          <img
            className="results-ico"
            onClick={() => setOpenResults(true)}
            src={resultsIco}
            alt="lobby"
          />
          <div className="scram-master-container">
            <div className="flex-box">
              <ScramMaster />
              <div className="stop-game-btn">
                <Link to="/">
                  <Button text="Stop Game" colorBG={whiteColor} color={blueColor}></Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="issues-container">
            <div className="flex-box">
              <IssuesBlock />
              <div className="timer-block">
                <Timer />
                <Button text="Run Round" color={whiteColor} colorBG={blueColor} />
              </div>
            </div>
          </div>
        </section>
        {openResults && <RoundResult setOpenResults={setOpenResults} />}
      </div>
    </StyledGamePage>
  );
};

export default GamePage;
