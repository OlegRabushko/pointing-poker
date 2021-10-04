import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { setAllMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionSetAllMsgs } from '../redux/ChatRedux/ChatTypes';
import {
  setCurrUserID,
  setGameId,
  setUser,
  setCheck,
  setGameTitle,
} from '../redux/InitialRedux/InitialActions';
import {
  IActionSetCurrUserID,
  IActionSetGameId,
  IActionSetGameTitle,
  IActionSetUser,
  InitialState,
} from '../redux/InitialRedux/InitialTypes';
import { setIssue } from '../redux/IssueRedux/IssueActions';
import { IActionSetIssue, IssueState } from '../redux/IssueRedux/IssueTypes';
import {
  addNewIssueWithSocket,
  connectToSocket,
  notifyIssueDeleted,
  notifyIssueUpdated,
  notifyUserDeleted,
} from '../sockets/SocketsAPI';
import { IssueData, IUserInfo } from '../types/interfaces';

const URL = 'http://localhost:7001/api';

export const getAllIssues =
  (gameId: string): ThunkAction<void, IssueState, unknown, IActionSetIssue> =>
  (dispatch: ThunkDispatch<IssueState, unknown, IActionSetIssue>): Promise<IActionSetIssue> => {
    return fetch(`${URL}/issues/${gameId}`)
      .then((res) => res.json())
      .then((issues) => issues.map((issue: IssueData) => dispatch(setIssue(issue))));
  };

export const createNewIssue = async (gameId: string, issueData: IssueData) => {
  const data = { issueData, gameId };
  const res = await fetch(`${URL}/issues`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const issue = await res.json();
  return addNewIssueWithSocket(gameId, issue);
};

export const deleteIssueById = async (issueId: string) => {
  const deleteRes = await fetch(`${URL}/issues/${issueId}`, {
    method: 'DELETE',
  });
  const deletedIssue = await deleteRes.json();
  notifyIssueDeleted(deletedIssue);
};

export const updateIssueById = async (newIssueData: IssueData) => {
  const res = await fetch(`${URL}/issues`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newIssueData),
  });
  const updatedIssue: IssueData = await res.json();
  return notifyIssueUpdated(updatedIssue);
};

export const receiveAllMsgs =
  (gameId: string): ThunkAction<void, IChatState, unknown, IActionSetAllMsgs> =>
  async (
    dispatch: ThunkDispatch<IChatState, unknown, IActionSetAllMsgs>,
  ): Promise<IActionSetAllMsgs> => {
    const res = await fetch(`${URL}/messages/${gameId}`);
    const msgs = await res.json();
    return dispatch(setAllMessage(msgs));
  };

export const getAllUsers =
  (gameId: string): ThunkAction<void, InitialState, unknown, IActionSetUser> =>
  async (dispatch: ThunkDispatch<InitialState, unknown, IActionSetUser>) => {
    const res = await fetch(`${URL}/users/${gameId}`);
    const users = await res.json();
    return users.map((user: IUserInfo) => dispatch(setUser(user)));
  };

export const createNewUser =
  (
    gameId: string,
    newUser: IUserInfo,
  ): ThunkAction<void, InitialState, unknown, IActionSetCurrUserID> =>
  async (
    dispatch: ThunkDispatch<InitialState, unknown, IActionSetCurrUserID | IActionSetIssue>,
  ) => {
    const data = { newUser, gameId };
    const res = await fetch(`${URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const user = await res.json();
    dispatch(setCurrUserID(user._id));
    connectToSocket(gameId, user);
  };

export const deleteUserById = async (userId: string) => {
  const deleteRes = await fetch(`${URL}/users/${userId}`, {
    method: 'DELETE',
  });
  const deletedIssue = await deleteRes.json();
  notifyUserDeleted(deletedIssue);
};

export const createNewGame =
  (
    gameTitle: string,
    diler: IUserInfo,
  ): ThunkAction<void, InitialState, unknown, IActionSetGameId | IActionSetGameTitle> =>
  async (
    dispatch: ThunkDispatch<InitialState, unknown, IActionSetGameId | IActionSetGameTitle>,
  ) => {
    const data = { gameTitle };
    const res = await fetch(`${URL}/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const newGame = await res.json();
    dispatch(setGameId(newGame._id));
    dispatch(setGameTitle(newGame.title));
    return dispatch(createNewUser(newGame._id, diler));
  };

export const checkThunk = (id: string) => {
  return (dispatch: ThunkDispatch<any, any, any>) =>
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response) => response.json())
      .then((json) => dispatch(setCheck(json)));
};
