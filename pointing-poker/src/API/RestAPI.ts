import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setAllMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionSetAllMsgs } from '../redux/ChatRedux/ChatTypes';
import { setCurrUserID, setGameId, setUser } from '../redux/InitialRedux/InitialActions';
import {
  IActionSetCurrUserID,
  IActionSetGameId,
  IActionSetUser,
  InitialState,
} from '../redux/InitialRedux/InitialTypes';
import { setIssue } from '../redux/IssueRedux/IssueActions';
import { IActionSetIssue, IssueState } from '../redux/IssueRedux/IssueTypes';
import { connectToSocket } from '../sockets/SocketsAPI';
import { IssueData, IUserInfo } from '../types/interfaces';

const URL = 'http://localhost:7001/api';

export const getAllIssues =
  (gameId: string): ThunkAction<void, IssueState, unknown, IActionSetIssue> =>
  (dispatch: ThunkDispatch<IssueState, unknown, IActionSetIssue>): Promise<IActionSetIssue> => {
    return fetch(`${URL}/issues/${gameId}`)
      .then((res) => res.json())
      .then((issues) => issues.map((issue: IssueData) => dispatch(setIssue(issue))));
  };

export const createNewIssue = (gameId: string, issueData: IssueData) => {
  const data = { issueData, gameId };
  return fetch(`${URL}/issues`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const receiveAllMsgs =
  (gameId: string): ThunkAction<void, IChatState, unknown, IActionSetAllMsgs> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionSetAllMsgs>): Promise<IActionSetAllMsgs> => {
    return fetch(`${URL}/messages/${gameId}`)
      .then((res) => res.json())
      .then((msgs) => dispatch(setAllMessage(msgs)));
  };

export const getAllUsers =
  (gameId: string): ThunkAction<void, InitialState, unknown, IActionSetUser> =>
  (dispatch: ThunkDispatch<InitialState, unknown, IActionSetUser>) => {
    return fetch(`${URL}/users/${gameId}`)
      .then((res) => res.json())
      .then((users) => users.map((user: IUserInfo) => dispatch(setUser(user))));
  };

export const createNewUser =
  (
    gameId: string,
    newUser: IUserInfo,
  ): ThunkAction<void, InitialState, unknown, IActionSetCurrUserID> =>
  (dispatch: ThunkDispatch<InitialState, unknown, IActionSetCurrUserID>) => {
    const data = { newUser, gameId };
    return fetch(`${URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => dispatch(setCurrUserID(user._id)))
      .then(() => connectToSocket(gameId));
  };

export const createNewGame =
  (
    gameIndex: string,
    diler: IUserInfo,
  ): ThunkAction<void, InitialState, unknown, IActionSetGameId> =>
  (dispatch: ThunkDispatch<InitialState, unknown, IActionSetGameId>) => {
    const data = { gameIndex };
    return fetch(`${URL}/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newGame) => dispatch(setGameId(newGame._id)))
      .then((action) => dispatch(createNewUser(action.payload, diler)));
  };
