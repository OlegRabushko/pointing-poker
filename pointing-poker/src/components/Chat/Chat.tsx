import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledChatBox, StyledChatWindow } from './StyledChat';
import { IMsg } from '../../types/interfaces';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatInput from '../ChatInput/ChatInput';
import { recieveMsg, sendMsgToAll } from '../../sockets/SocketsAPI';
import { RootState } from '../../redux';
import { receiveAllMsgs } from '../../API/API';

const Chat = () => {
  const [msg, setMsg] = useState('inner msg');
  const dispatch = useDispatch();
  const txtRef = useRef<HTMLDivElement>(null);
  const { gameId, msgs, currUserID, users } = useSelector((state: RootState) => ({
    gameId: state.initial.gameId,
    currUserID: state.initial.currUserID,
    msgs: state.chat.msgs,
    users: state.initial.users,
  }));
  const sendMsgToServer = (content: IMsg) => {
    sendMsgToAll(content);
    setMsg('');
    if (txtRef.current) txtRef.current.innerText = '';
  };
  const submitMsg = () => {
    const sendTime = new Date();
    const decimaLen = 2;
    sendMsgToServer({
      game_id: `${gameId}`,
      user_id: currUserID,
      text: msg,
      time: `${sendTime.getHours()}:${
        sendTime.getMinutes().toString().length < decimaLen
          ? `0${sendTime.getMinutes()}`
          : sendTime.getMinutes()
      }`,
    });
  };
  useEffect(() => {
    dispatch(receiveAllMsgs(gameId));
    dispatch(recieveMsg());
  }, []);
  return (
    <StyledChatBox>
      <StyledChatWindow>
        {msgs.length &&
          msgs.map((msgData: IMsg, msgIndex) => (
            <ChatMessage key={msgIndex} users={users} currUserID={currUserID} msgData={msgData} />
          ))}
      </StyledChatWindow>
      <ChatInput submitMsg={submitMsg} setMsg={setMsg} txtRef={txtRef} />
    </StyledChatBox>
  );
};

export default Chat;
