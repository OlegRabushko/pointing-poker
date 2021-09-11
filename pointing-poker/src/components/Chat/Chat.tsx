import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageContainer } from '../UserCard/user-card.styled';
import sendImg from '../../assets/icons/send-icon.svg';
import { StyledChatBox, StyledChatInput, StyledChatWindow, StyledMsg } from './chat.styled';
import { RootState } from '../../redux';
import { IMsg } from '../../types/interfaces';
import { vME, vOTHERS } from '../../types/virables';
import { setMessage } from '../../redux/chat-reducer/chat-actions';

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
    sendMsgToServer({
      userId: currUserID,
      username: users[currUserID].userName,
      msgText: msg,
      msgDate: `${sendTime.getHours()}:${sendTime.getMinutes()}`,
    });
  };
  const showMsg = ({ msgId, userId, username, msgText, msgDate }: IMsg): JSX.Element => {
    const currMsgUser = users[userId];
    return (
      <StyledMsg key={msgId} viewType={userId === currUserID ? vME : vOTHERS}>
        <ImageContainer className="avatar-chat">
          {currMsgUser.avatatr ? (
            <img src={currMsgUser.avatatr} className="" alt="avatar" />
          ) : (
            <p className="initials">{currMsgUser.userName.slice(0, 1)}</p>
          )}
        </ImageContainer>
        <div className="text-bubble">
          <div className="msg-txt">
            <div className="chat-username">{username}</div>
            <div className="msg">{msgText}</div>
            <span className="msg-info">{msgDate}</span>
          </div>
        </div>
      </StyledMsg>
    );
  };
  useEffect(() => {}, []);
  return (
    <StyledChatBox>
      <StyledChatWindow>{msgs.map((msgData: IMsg) => showMsg(msgData))}</StyledChatWindow>
      <StyledChatInput>
        <div className="input-wrapper">
          <div
            contentEditable="true"
            role="textbox"
            data-placeholder="Message"
            className="text-input"
            ref={txtRef}
            onInput={(e: React.KeyboardEvent<HTMLDivElement>) =>
              setMsg((e.target as HTMLInputElement).innerText)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
              e.key === 'Enter' && !e.shiftKey ? (submitMsg(), e.preventDefault()) : null
            }
            tabIndex={-1}
          />
          <div
            role="button"
            onClick={() => submitMsg()}
            className="send-btn-container"
            tabIndex={0}
          >
            <img src={sendImg} alt="send message" className="send-btn-img" />
          </div>
        </div>
      </StyledChatInput>
    </StyledChatBox>
  );
};

export default Chat;
