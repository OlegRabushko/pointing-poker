import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { getAllMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionGetAllMsgs } from '../redux/ChatRedux/ChatTypes';
import { setCurrUserID, setGameId } from '../redux/InitialRedux/InitialActions';
import {
  IActionSetCurrUserID,
  IActionSetGameId,
  InitialState,
} from '../redux/InitialRedux/InitialTypes';
import { connectToSocket } from '../sockets/SocketsAPI';
import { IUserInfo } from '../types/interfaces';

const URL = 'http://localhost:7001/api';

export const receiveAllMsgs =
  (gameId: String): ThunkAction<void, IChatState, unknown, IActionGetAllMsgs> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionGetAllMsgs>): Promise<IActionGetAllMsgs> => {
    return fetch(`${URL}/messages/${gameId}`)
      .then((res) => res.json())
      .then((msgs) => dispatch(getAllMessage(msgs)));
  };

export const createNewUser =
  (newUser: IUserInfo): ThunkAction<void, InitialState, unknown, IActionSetCurrUserID> =>
  (dispatch: ThunkDispatch<InitialState, unknown, IActionSetCurrUserID>) => {
    const data = { newUser };
    return fetch(`${URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((user) => dispatch(setCurrUserID(user._id)));
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
      .then(() => dispatch(createNewUser(diler)));
  };
