import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import { ScramMaster } from '../ScramMasterBlock/ScramMasterBlock';
import Timer from '../Timer/Timer';
import { StyledGamePage } from '../GamePageDealer/StyledGamePage';
import resultsIco from '../../assets/icons/results-ico.png';
import RoundResult from '../RoundResult/RoundResult';
import { blueColor } from '../GlobalStyle/StyledGlobal';
import IssuesBlock from '../IssuesBlock/issuesBlock';
import { Cards } from '../CardValuesBlock/CardValuesBlock';
import StatisticsSection from '../StatisticsSection/StatisticsSection';

const GamePagePlayer = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <StyledGamePage>
      <div className="flex-box">
        <section className="info">
          <Link to="/game-dealer">DealerPage</Link>
          <LobbyHeaderBlock />
          <img
            className="results-ico"
            onClick={() => setShowResults(true)}
            src={resultsIco}
            alt=""
          />
          <div className="scram-master-container">
            <div className="flex-box">
              <ScramMaster />
              <div className="stop-game-btn">
                <Link to="/">
                  <Button text="Exit" colorBG="#fff" color={blueColor}></Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="issues-container">
            <div className="flex-box">
              <IssuesBlock />
              <div className="timer-block">
                <Timer />
              </div>
            </div>
          </div>
        </section>
        {showResults && <RoundResult setShowResults={setShowResults} />}
      </div>
      <section className="cards-section">
        <StatisticsSection isStats />
      </section>
      <section className="cards-section">
        <Cards isStats={false} />
      </section>
    </StyledGamePage>
  );
};

export default GamePagePlayer;
