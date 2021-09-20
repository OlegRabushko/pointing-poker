import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Button/Button';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import Timer from '../Timer/Timer';
import { StyledGamePage } from './StyledGamePage';
import resultsIco from '../../assets/icons/results-ico.png';
import RoundResult from '../RoundResult/RoundResult';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import IssuesSection from '../IssuesSection/issuesSection';
import ScramMasterSection from '../ScramMasterSection/ScramMasterSection';

const GamePageDealer = () => {
  const [showResults, setShowResults] = useState(false);
  const [round, setRound] = useState(false);

  const showStatistics = () => setRound((prev) => !prev);

  return (
    <StyledGamePage>
      <div className="flex-box">
        <section className="info">
          <Link to="/game-player">PlayerPage</Link>
          <LobbyHeaderSection />
          <img
            className="results-ico"
            onClick={() => setShowResults(true)}
            src={resultsIco}
            alt=""
          />
          <div className="scram-master-container">
            <div className="flex-box">
              <ScramMasterSection />
              <div className="stop-game-btn">
                <Link to="/">
                  <Button text="Stop Game" colorBG={whiteColor} color={blueColor}></Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="issues-container">
            <div className="flex-box">
              <IssuesSection />
              <div className="timer-block">
                <Timer />
                {round ? (
                  <>
                    <Button
                      text="Restart Round"
                      color={whiteColor}
                      onClick={showStatistics}
                      colorBG={blueColor}
                    />
                    <Link to="/results">
                      <Button
                        text="Next ISSUE"
                        onClick={showStatistics}
                        color={whiteColor}
                        colorBG={blueColor}
                      />
                    </Link>
                  </>
                ) : (
                  <Button
                    text="Run Round"
                    onClick={showStatistics}
                    color={whiteColor}
                    colorBG={blueColor}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
        {showResults && <RoundResult setShowResults={setShowResults} />}
      </div>
      <section className="cards-section">{round && <StatisticsSection isStats />}</section>
    </StyledGamePage>
  );
};

export default GamePageDealer;
