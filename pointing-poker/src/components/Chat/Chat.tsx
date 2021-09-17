import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { StyledChatBox, StyledChatWindow } from './StyledChat';
import { RootState } from '../../redux';
import { IMsg } from '../../types/interfaces';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatInput from '../ChatInput/ChatInput';
import { sendMsgToAll } from '../../sockets/Sockets';

const Chat = () => {
  const [msg, setMsg] = useState('inner msg');
  const txtRef = useRef<HTMLDivElement>(null);
  const { msgs, currUserID, users } = useSelector((state: RootState) => ({
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
      order_id: `${nanoid()}`,
      user_id: currUserID,
      text: msg,
      time: `${sendTime.getHours()}:${
        sendTime.getMinutes().toString().length < decimaLen
          ? `0${sendTime.getMinutes()}`
          : sendTime.getMinutes()
      }`,
    });
  };
  useEffect(() => {}, []);
  return (
    <StyledChatBox>
      <StyledChatWindow>
        {msgs.map((msgData: IMsg, msgIndex) => (
          <ChatMessage key={msgIndex} users={users} currUserID={currUserID} msgData={msgData} />
        ))}
      </StyledChatWindow>
      <ChatInput submitMsg={submitMsg} setMsg={setMsg} txtRef={txtRef} />
    </StyledChatBox>
  );
};

export default Chat;
