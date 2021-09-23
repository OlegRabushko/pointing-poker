import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import Timer from '../Timer/Timer';
import { StyledGamePage } from './StyledGamePage';
import resultsIco from '../../assets/icons/results-ico.png';
import RoundResult from '../RoundResult/RoundResult';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import IssuesSection from '../IssuesSection/issuesSection';
import { RootState } from '../../redux';
import { setRound } from '../../redux/InitialRedux/InitialActions';
import { setMinutes, setSeconds } from '../../redux/TimerRedux/TimerActions';
import ScramMasterCard from '../ScramMasterSection/ScramMasterCard';

const GamePageDealer = () => {
  const isRound = useSelector((store: RootState) => store.gameProcess.startRound);
  const timeStore = useSelector((store: RootState) => store.timer);
  const dispatch = useDispatch();
  const [showResults, setShowResults] = useState(false);
  const startRound = () => dispatch(setRound(!isRound));
  const stopRound = () => {
    dispatch(setRound(!isRound));
    setTimeout(() => {
      dispatch(setMinutes(timeStore.startTime[0]));
      dispatch(setSeconds(timeStore.startTime[1]));
    }, 1000);
  };

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
          <div className="text">Scram master</div>
          <ScramMasterCard />
          <div className="scram-master-container">
            <div className="stop-game-btn">
              <Link to="/">
                <Button text="Stop Game" colorBG={whiteColor} color={blueColor}></Button>
              </Link>
            </div>
          </div>
          <div className="issues-container">
            <IssuesSection />
            <div className="timer-block">
              <Timer />
              {isRound ? (
                <>
                  <Button
                    text="Restart Round"
                    color={whiteColor}
                    onClick={stopRound}
                    colorBG={blueColor}
                  />
                  <Link to="/results">
                    <Button
                      text="Next ISSUE"
                      onClick={startRound}
                      color={whiteColor}
                      colorBG={blueColor}
                    />
                  </Link>
                </>
              ) : (
                <Button
                  text="Run Round"
                  onClick={startRound}
                  color={whiteColor}
                  colorBG={blueColor}
                />
              )}
            </div>
          </div>
        </section>
        {showResults && <RoundResult setShowResults={setShowResults} />}
      </div>
      <section className="cards-section">{isRound && <StatisticsSection isStats />}</section>
    </StyledGamePage>
  );
};

export default GamePageDealer;
