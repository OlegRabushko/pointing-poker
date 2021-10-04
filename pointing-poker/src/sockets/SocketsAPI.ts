import { io } from 'socket.io-client';
import { History } from 'history';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionSetMsg } from '../redux/ChatRedux/ChatTypes';
import { IIssueCard } from '../components/Forms/FormTypes';
import { setDeletedUser, setRound, setUser } from '../redux/InitialRedux/InitialActions';
import {
  IActionDeleteUser,
  IActionSetUser,
  InitialState,
} from '../redux/InitialRedux/InitialTypes';
import { TimerStateTypes } from '../redux/TimerRedux/TimerReducer';
import { IMsg, IssueData, Issues, IUserInfo } from '../types/interfaces';
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
import {
  setCurrIssueID,
  setDeletedIssue,
  setIssue,
  setUpdatedIssue,
} from '../redux/IssueRedux/IssueActions';
import {
  IActionSetIssue,
  IActiontDeleteIssue,
  IActionUpdateIssue,
  IssueState,
} from '../redux/IssueRedux/IssueTypes';

export const socket = io('http://localhost:7001');

export const connectToSocket = (roomId: string, user: IUserInfo) => {
  socket.emit('join-game', roomId, user);
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

export const getInitialDataByScoket = (
  dispatch: ThunkDispatch<InitialState, unknown, IActionSetIssue | IActionSetUser>,
) => {
  socket.on('get-prev-data', (users, issues) => {
    users.map((user: IUserInfo) => dispatch(setUser(user)));
    issues.map((issue: IssueData) => dispatch(setIssue(issue)));
  });
};

export const jonedNotification = (
  dispatch: ThunkDispatch<InitialState, unknown, IActionSetUser>,
) => {
  socket.on('joined', (user: IUserInfo) => {
    dispatch(setUser(user));
  });
};

export const addNewIssueWithSocket = (gameId: string, issue: IssueData) => {
  socket.emit('add-issue', gameId, issue);
};
export const emitIssueToAll = (dispatch: ThunkDispatch<IssueState, unknown, IActionSetIssue>) => {
  socket.on('issue-to-all', (issue) => {
    dispatch(setIssue(issue));
  });
};

export const notifyUserDeleted = (deletedUser: IUserInfo) => {
  socket.emit('user-deleted-send', deletedUser);
};
export const receiveDeletedUser = (
  dispatch: ThunkDispatch<InitialState, unknown, IActionDeleteUser>,
) => {
  socket.on('user-deleted-get', (deletedIssueId) => {
    dispatch(setDeletedUser(deletedIssueId));
  });
};

export const notifyIssueDeleted = (deletedIssue: IssueData) => {
  socket.emit('issue-deleted-send', deletedIssue);
};
export const receiveDeletedIssue = (
  dispatch: ThunkDispatch<IssueState, unknown, IActiontDeleteIssue>,
) => {
  socket.on('issue-deleted-get', (deletedIssueId) => {
    dispatch(setDeletedIssue(deletedIssueId));
  });
};

export const notifyIssueUpdated = (updatedIssue: IssueData) => {
  socket.emit('issue-updated-send', updatedIssue);
};
export const receiveUpdatedIssue = (
  dispatch: ThunkDispatch<IssueState, unknown, IActionUpdateIssue>,
) => {
  socket.on('issue-updated-get', (updatedIssue) => {
    dispatch(setUpdatedIssue(updatedIssue));
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
    dispatch(createIssueCard(issues, issues.title, false, false));
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
  socket.on('received-restart-round', (issueCards: Issues) => {
    if (Object.keys(issueCards).length > 0) {
      Object.keys(issueCards).forEach((issueId: string) => {
        if (issueCards[issueId].isCurrent && issueCards[issueId].isCompleted) {
          dispatch(setCompletedIssueCard({ id: issueCards[issueId]._id, count: false }));
        }
      });
      dispatch(setRound(false));
      setStartedTime();
      dispatch(setInitialCards(true));
    }
  });
};

export const sendCurrIssue = (issueId: string, gameId: string) => {
  socket.emit('curr-issue', issueId, gameId);
};
export const receivedCurrIssue = (
  setStartedTime: () => void,
  // addCardsForResult: (cards: CardType[], IssueCards: Issues, index: number) => void,
  dispatch: ThunkDispatch<any, unknown, any>,
) => {
  socket.on('received-curr-issue', (issueId) => {
    setStartedTime();
    dispatch(setRound(false));
    dispatch(setElementIndex(issueId));
    dispatch(setCurrIssueID(issueId));
  });
};

export const sendResults = (
  cardsArr: CardType[],
  // issueCards: Issues,
  elemIndex: string,
  id: string,
) => {
  socket.emit('results', cardsArr, elemIndex, id);
};
export const receivedResults = (
  addCardsForResult: (cards: CardType[], issueId: string) => void,
) => {
  socket.on('received-results', (cards, elemIndex) => {
    addCardsForResult(cards, elemIndex);
  });
};

// choosen card bvalues
export const sendCard = (cardID: string | number, gameId: string) => {
  socket.emit('card', cardID, gameId);
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
