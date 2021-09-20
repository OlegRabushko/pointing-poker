import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { getAllMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionGetAllMsgs } from '../redux/ChatRedux/ChatTypes';
import { IUserInfo } from '../types/interfaces';

const URL = 'http://localhost:7001/api';

export const receiveAllMsgs =
  (gameId: String): ThunkAction<void, IChatState, unknown, IActionGetAllMsgs> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionGetAllMsgs>): Promise<IActionGetAllMsgs> => {
    return fetch(`${URL}/messages/${gameId}`)
      .then((res) => res.json())
      .then((msgs) => dispatch(getAllMessage(msgs)));
  };

export const setNewGame = (gameId: string, diler: IUserInfo) => {
  const data = { gameId, diler };
  fetch(`${URL}/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
