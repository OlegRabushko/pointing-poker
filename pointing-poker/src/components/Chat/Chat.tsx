import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledChatBox, StyledChatWindow } from './StyledChat';
import { IMsg } from '../../types/interfaces';
import { setMessage } from '../../redux/ChatRedux/ChatActions';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatInput from '../ChatInput/ChatInput';
import { RootState } from '../../redux';

const Chat = () => {
  const [msg, setMsg] = useState('inner msg');
  const dispatch = useDispatch();
  const txtRef = useRef<HTMLDivElement>(null);
  const { msgs, currUserID, users } = useSelector((state: RootState) => ({
    currUserID: state.initial.currUserID,
    msgs: state.chat.msgs,
    users: state.initial.users,
  }));
  const sendMsgToServer = (content: IMsg) => {
    dispatch(setMessage(content));
    setMsg('');
    if (txtRef.current) txtRef.current.innerText = '';
  };
  const submitMsg = () => {
    const sendTime = new Date();
    const decimaLen = 2;
    sendMsgToServer({
      userId: currUserID,
      username: users[currUserID].lastName,
      msgText: msg,
      msgDate: `${sendTime.getHours()}:${
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
