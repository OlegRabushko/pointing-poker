import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { getAllMessage } from '../redux/ChatRedux/ChatActions';
import { IChatState } from '../redux/ChatRedux/ChatReducer';
import { IActionGetAllMsgs } from '../redux/ChatRedux/ChatTypes';

const URL = 'http://localhost:7001/api';

export const receiveAllMsgs =
  (gameId: String): ThunkAction<void, IChatState, unknown, IActionGetAllMsgs> =>
  (dispatch: ThunkDispatch<IChatState, unknown, IActionGetAllMsgs>): Promise<IActionGetAllMsgs> => {
    return fetch(`${URL}/messages/${gameId}`)
      .then((res) => res.json())
      .then((msgs) => dispatch(getAllMessage(msgs)));
  };

