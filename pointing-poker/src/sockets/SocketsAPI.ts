import { io } from 'socket.io-client';
import { History } from 'history';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionSetMsg } from '../redux/ChatRedux/ChatTypes';
import { IIssueCard } from '../components/Forms/FormTypes';
import { setRound, setUser } from '../redux/InitialRedux/InitialActions';
import { IActionSetUser, InitialState } from '../redux/InitialRedux/InitialTypes';
import { TimerStateTypes } from '../redux/TimerRedux/TimerReducer';
import { IMsg, IUserInfo } from '../types/interfaces';
import { ILobbySettingsState } from '../redux/SettingsSectionRedux/SettingsSectionReducer';
import {
  createIssueCard,
  setCompletedIssueCard,
  setElementIndex,
} from '../redux/FormRedux/FormActions';
import {
  setCardInRoundEnd,
  setCoffeeCard,
  setQuestionCard,
  setScramMasterRole,
  setSequenceType,
  setTimer,
} from '../redux/SettingsSectionRedux/SettingsSectionActions';
import { setMinutes, setSeconds, setStartTime } from '../redux/TimerRedux/TimerActions';
import {
  setGameCardCount,
  setInitialCards,
  setGameCard,
} from '../redux/GameCardRedux/GameCardActions';
import { CardType } from '../redux/GameCardRedux/GameCardTypes';

export const socket = io('http://localhost:7001');

export const connectToSocket = (roomId: string) => {
  socket.emit('join-game', roomId);
};

export const sendMsgToAll = async (msg: IMsg) => {
  socket.emit('send-msg', msg);
};

export const recieveMsg =
  (): ThunkAction<void, IChatState, unknown, IActionSetMsg> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionSetMsg>) =>
    socket.on('recieve-msg', (msg) => {
      dispatch(setMessage(msg));
    });

export const jonedNotification = (
  dispatch: ThunkDispatch<InitialState, unknown, IActionSetUser>,
) => {
  socket.on('joined', (users) => {
    users.map((user: IUserInfo) => dispatch(setUser(user)));
  });
};

export const sendSettingsToAll = (settings: ILobbySettingsState, id: string) => {
  socket.emit('game-settings', settings, id);
};
export const receivedSettings = (
  dispatch: ThunkDispatch<ILobbySettingsState, unknown, any>,
  history: History,
) => {
  socket.on('received-settings', (settings: ILobbySettingsState) => {
    dispatch(setScramMasterRole(settings.scramMasterAsPlayer));
    dispatch(setCardInRoundEnd(settings.changeCardInRoundEnd));
    dispatch(setTimer(settings.timerNeeded));
    dispatch(setCoffeeCard(settings.coffeeCardNeeded));
    dispatch(setQuestionCard(settings.questionCardNeeded));
    dispatch(setSequenceType(settings.sequenceType));
    history.push('/game');
  });
};

export const sendTimerToAll = (time: TimerStateTypes, id: string) => {
  socket.emit('set-timer', time, id);
};
export const receivedTimer = (dispatch: ThunkDispatch<TimerStateTypes, unknown, any>) => {
  socket.on('received-timer', (time: TimerStateTypes) => {
    dispatch(setMinutes(time.minutes));
    dispatch(setSeconds(time.seconds));
    dispatch(setStartTime([time.minutes, time.seconds]));
  });
};

export const sendIssuesToAll = (issues: IIssueCard, id: string) => {
  socket.emit('set-issues', issues, id);
};
export const receivedIssues = (dispatch: ThunkDispatch<IIssueCard, unknown, any>) => {
  socket.on('received-issues', (issues: IIssueCard) => {
    dispatch(createIssueCard(issues, issues.issueTitle, false, false));
  });
};

export const sendRelocateResultPage = (id: string) => {
  socket.emit('relocate-result-page', id);
};
export const receivedRelocateResultPage = (history: History) => {
  socket.on('received-relocate-result-page', () => {
    history.push('/results');
  });
};

export const sendStartRound = (id: string) => {
  socket.emit('round', id);
};
export const receivedStartRound = (dispatch: ThunkDispatch<boolean, unknown, any>) => {
  socket.on('received-round', () => {
    dispatch(setRound(true));
  });
};

export const sendRestartRound = (issueCards: IIssueCard[], id: string) => {
  socket.emit('restart-round', issueCards, id);
};
export const receivedRestartRound = (
  setStartedTime: () => void,
  dispatch: ThunkDispatch<any, unknown, any>,
) => {
  socket.on('received-restart-round', (issueCards: IIssueCard[]) => {
    if (issueCards.length > 0) {
      issueCards.forEach((el: IIssueCard) => {
        if (el.current && el.isCompleted) {
          dispatch(setCompletedIssueCard({ id: el.issueID, count: false }));
        }
      });

      dispatch(setRound(false));
      setStartedTime();
      dispatch(setInitialCards(true));
    }
  });
};

export const sendNextIssue = (
  cardsArr: CardType[],
  issueCards: IIssueCard[],
  elemIndex: number,
  id: string,
) => {
  socket.emit('next-issue', cardsArr, issueCards, elemIndex, id);
};
export const receivedNextIssue = (
  setStartedTime: () => void,
  addCardsForResult: (cards: CardType[], IssueCards: IIssueCard[], index: number) => void,
  dispatch: ThunkDispatch<any, unknown, any>,
) => {
  socket.on('received-next-issue', (cards, issueCards, elemIndex) => {
    setStartedTime();
    dispatch(setRound(false));
    dispatch(setElementIndex(elemIndex + 1));
    addCardsForResult(cards, issueCards, elemIndex);
  });
};

export const sendResults = (
  cardsArr: CardType[],
  issueCards: IIssueCard[],
  elemIndex: number,
  id: string,
) => {
  socket.emit('results', cardsArr, issueCards, elemIndex, id);
};
export const receivedResults = (
  addCardsForResult: (cards: CardType[], IssueCards: IIssueCard[], index: number) => void,
) => {
  socket.on('received-results', (cards, issueCards, elemIndex) => {
    if (elemIndex + 1 < issueCards.length) addCardsForResult(cards, issueCards, elemIndex);
  });
};

export const sendCard = (cardID: string | number, id: string) => {
  socket.emit('card', cardID, id);
};
export const receivedCard = (dispatch: ThunkDispatch<any, unknown, any>) => {
  socket.on('received-card', (cardID) => {
    dispatch(setGameCardCount(1));
    dispatch(
      setGameCard({
        id: cardID,
        chosen: 1,
      }),
    );
  });
};

export const sendDeletedCard = (cardID: string | number, id: string) => {
  socket.emit('card-deleted', cardID, id);
};
export const receivedDeletedCard = (dispatch: ThunkDispatch<any, unknown, any>) => {
  socket.on('received-card-deleted', (cardID) => {
    dispatch(setGameCardCount(-1));
    dispatch(
      setGameCard({
        id: cardID,
        chosen: -1,
      }),
    );
  });
};
