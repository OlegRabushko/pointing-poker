/* eslint-disable spaced-comment */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
import { setMinutes, setSeconds } from '../../redux/TimerRedux/TimerActions';
import { setInitialCards } from '../../redux/GameCardRedux/GameCardActions';
import { setResultCards } from '../../redux/ResultsPageRedux/ResultsPageActions';
import { StyledGamePage } from './StyledGamePage';
import {
  receivedCard,
  receivedCurrIssue,
  receivedDeletedCard,
  receivedRestartRound,
  receivedResults,
  receivedStartRound,
  sendRelocateResultPage,
  sendRestartRound,
  sendResults,
  sendStartRound,
} from '../../sockets/SocketsAPI';
import { CardType } from '../../redux/GameCardRedux/GameCardTypes';
import { setCompletedIssue } from '../../redux/IssueRedux/IssueActions';
import { updateIssueById } from '../../API/RestAPI';

const GamePage = () => {
  const [showResults, setShowResults] = useState(false);
  const dispatch = useDispatch();
  const isRound = useSelector((store: RootState) => store.gameProcess.startRound);
  const gameID = useSelector((store: RootState) => store.initial.gameId);
  const { timerNeeded, scramMasterAsPlayer } = useSelector((store: RootState) => store.settings);
  const cardsArr = useSelector((store: RootState) => [...store.card.store]);
  const timeStore = useSelector((store: RootState) => store.timer);
  const { isPlayer, isDialer } = useSelector((store: RootState) => store.personStatus);
  const { issueCards } = useSelector((state: RootState) => state.issueFormData);
  const { issues, currIssueId, completedIssue } = useSelector((state: RootState) => state.issues);
  const { minutes, seconds } = useSelector((store: RootState) => store.timer);
  const isTimer = useSelector((store: RootState) => store.settings.timerNeeded);

  const startRound = () => sendStartRound(gameID);
  const restartRound = () => sendRestartRound(issueCards, gameID);
  //const nextIssue = () => sendNextIssue(cardsArr, issueCards, elemIndex, gameID);
  const setResults = () => {
    dispatch(setCompletedIssue(currIssueId));
    sendResults(cardsArr, currIssueId, gameID);
    sendRelocateResultPage(gameID);
  };

  const setStartedTime = () =>
    setTimeout(() => {
      dispatch(setMinutes(timeStore.startTime[0]));
      dispatch(setSeconds(timeStore.startTime[1]));
    }, 500);

  const addCardsForResult = (cards: CardType[], issueId: string) => {
    const updatedCardsArr = () => cards.filter((card) => card.stats > 0);
    dispatch(
      setResultCards({
        title: issues[issueId].title,
        issueId: issues[issueId]._id,
        cardsResult: updatedCardsArr().map((card) => ({
          id: card.id,
          stats: card.stats,
          content: card.content,
        })),
      }),
    );
    const cardsResult = updatedCardsArr().map((card) => ({
      id: card.id,
      stats: card.stats,
      content: card.content,
    }));
    updateIssueById({
      _id: issues[issueId]._id,
      game_id: issues[issueId].game_id,
      title: issues[issueId].title,
      link: issues[issueId].link,
      priority: issues[issueId].priority,
      isCurrent: issues[issueId].isCurrent,
      results: cardsResult,
    });
    dispatch(setInitialCards(true));
  };

  useEffect(() => {
    if (isTimer && minutes === 0 && seconds === 0) {
      addCardsForResult(cardsArr, currIssueId);
    }
  }, [minutes, seconds]);

  useEffect(() => {
    receivedStartRound(dispatch);
    receivedRestartRound(setStartedTime, dispatch);
    receivedCurrIssue(setStartedTime, dispatch);
    receivedResults(addCardsForResult);
    receivedCard(dispatch);
    receivedDeletedCard(dispatch);
  }, []);

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

                  {/* {issues[setCurrIssueID].isCompleted && elemIndex + 1 < issueCards.length && (
                    <Button
                      text="Next ISSUE"
                      onClick={nextIssue}
                      color={whiteColor}
                      colorBG={blueColor}
                    />
                  )} */}
                  {Object.keys(issues).length === completedIssue.length && (
                    <Link to="/results" onClick={setResults}>
                      <Button
                        text="Results"
                        //onClick={nextIssue}
                        color={whiteColor}
                        colorBG={blueColor}
                      />
                    </Link>
                  )}
                </>
              ) : (
                <>
                  {Object.keys(issues).length > 0 && isDialer ? (
                    <Button
                      text="Run Round"
                      onClick={startRound}
                      color={whiteColor}
                      colorBG={blueColor}
                    />
                  ) : (
                    isDialer && <div className="no-issues">No Issues</div>
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
