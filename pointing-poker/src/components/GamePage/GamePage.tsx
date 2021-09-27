import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import Timer from '../Timer/Timer';
import resultsIco from '../../assets/icons/results-ico.png';
import RoundResult from '../RoundResult/RoundResult';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import IssuesSection from '../IssuesSection/issuesSection';
import { Cards } from '../CardValuesSection/CardValuesSection';
import StatisticsSection from '../StatisticsSection/StatisticsSection';
import ScramMasterCard from '../ScramMasterSection/ScramMasterCard';
import { RootState } from '../../redux';
import { setCompletedIssueCard, setElementIndex } from '../../redux/FormRedux/FormActions';
import { setRound } from '../../redux/InitialRedux/InitialActions';
import { setMinutes, setSeconds } from '../../redux/TimerRedux/TimerActions';
import { setInitialCards } from '../../redux/GameCardRedux/GameCardActions';
import { setResultCards } from '../../redux/ResultsPageRedux/ResultsPageActions';
import { StyledGamePage } from './StyledGamePage';

const GamePage = () => {
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const isRound = useSelector((store: RootState) => store.gameProcess.startRound);
  const { timerNeeded, scramMasterAsPlayer } = useSelector((store: RootState) => store.settings);
  const cardsArr = useSelector((store: RootState) => [...store.card.store]);
  const timeStore = useSelector((store: RootState) => store.timer);
  const { isPlayer, isDialer } = useSelector((store: RootState) => store.personStatus);
  const { issueCards, elemIndex } = useSelector((state: RootState) => state.issueFormData);
  const updatedCardsArr = () => cardsArr.filter((el) => el.stats > 0);

  const startRound = () => dispatch(setRound(true));

  const setStartedTime = () =>
    setTimeout(() => {
      dispatch(setMinutes(timeStore.startTime[0]));
      dispatch(setSeconds(timeStore.startTime[1]));
    }, 500);

  const restartRound = () => {
    if (issueCards.length > 0) {
      issueCards.forEach((el) => {
        if (el.current && el.isCompleted) {
          dispatch(setCompletedIssueCard({ id: el.issueID, count: false }));
        }
      });
      dispatch(setRound(false));
      setStartedTime();
      dispatch(setInitialCards(true));
    }
  };

  const addCardsForResult = async () => {
    await dispatch(
      setResultCards({
        title: issueCards[elemIndex].issueTitle,
        link: issueCards[elemIndex].issueLink,
        priority: issueCards[elemIndex].issuePriority,
        cardsResult: updatedCardsArr().map((el) => ({
          id: el.id,
          stats: el.stats,
          content: el.content,
        })),
      }),
    );
    await dispatch(setInitialCards(true));
  };

  const nextIssue = () => {
    setStartedTime();
    dispatch(setRound(false));
    dispatch(setElementIndex(elemIndex + 1));
    addCardsForResult();
  };

  const setResults = () => {
    if (elemIndex + 1 < issueCards.length) addCardsForResult();
  };

  return (
    <StyledGamePage>
      <div className="flex-box">
        <section className="info">
          <LobbyHeaderSection />
          <img
            className="results-ico"
            onClick={() => setShowResults(true)}
            src={resultsIco}
            alt="results"
          />
          <div className="text">Scram master</div>
          <ScramMasterCard />
          <div className="scram-master-container">
            <div className="flex-box">
              <div className="stop-game-btn">
                <Link to="/">
                  <Button
                    text={isDialer ? 'Stop Game' : 'Exit'}
                    colorBG={whiteColor}
                    color={blueColor}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="issues-container">
            <IssuesSection />
            <div className="timer-block">
              {timerNeeded && <Timer />}
              {isRound && isDialer ? (
                <>
                  <Button
                    text="Restart Round"
                    color={whiteColor}
                    onClick={restartRound}
                    colorBG={blueColor}
                  />

                  {issueCards[elemIndex].isCompleted && elemIndex + 1 < issueCards.length && (
                    <Button
                      text="Next ISSUE"
                      onClick={nextIssue}
                      color={whiteColor}
                      colorBG={blueColor}
                    />
                  )}
                  {issueCards[issueCards.length - 1].isCompleted && (
                    <Link to="/results" onClick={setResults}>
                      <Button
                        text="Results"
                        onClick={nextIssue}
                        color={whiteColor}
                        colorBG={blueColor}
                      />
                    </Link>
                  )}
                </>
              ) : (
                <>
                  {issueCards.length > 0 && isDialer ? (
                    <Button
                      text="Run Round"
                      onClick={startRound}
                      color={whiteColor}
                      colorBG={blueColor}
                    />
                  ) : (
                    <div className="no-issues">No Issues</div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
        {showResults && <RoundResult setShowResults={setShowResults} />}
      </div>
      <section className="section">
        <StatisticsSection isStats />
      </section>
      {((isRound && isPlayer) || (isRound && scramMasterAsPlayer)) && (
        <section className="section">
          <Cards isStats={false} />
        </section>
      )}
    </StyledGamePage>
  );
};

export default GamePage;
