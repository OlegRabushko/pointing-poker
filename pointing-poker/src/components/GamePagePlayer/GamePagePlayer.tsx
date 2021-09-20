import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import Timer from '../Timer/Timer';
import { StyledGamePage } from '../GamePageDealer/StyledGamePage';
import resultsIco from '../../assets/icons/results-ico.png';
import RoundResult from '../RoundResult/RoundResult';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import IssuesSection from '../IssuesSection/issuesSection';
import { Cards } from '../CardValuesSection/CardValuesSection';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import ScramMaster from '../ScramMaster/ScramMaster';

const GamePagePlayer = () => {
  const [showResults, setShowResults] = useState(false);

  return (
    <StyledGamePage>
      <div className="flex-box">
        <section className="info">
          <Link to="/game-dealer">DealerPage</Link>
          <LobbyHeaderSection />
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
                  <Button text="Exit" colorBG={whiteColor} color={blueColor}></Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="issues-container">
            <div className="flex-box">
              <IssuesSection />
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
