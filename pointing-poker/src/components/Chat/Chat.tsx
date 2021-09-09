import React, { useEffect, useState } from 'react';
import { ImageContainer } from '../UserCard/user-card.styled';
import sendImg from '../../assets/icons/send-icon.svg';
import {
  StyledChatBox,
  StyledChatInput,
  StyledChatWindow,
  StyledMsgMe,
  StyledMsgOther,
} from './chat.styled';

const Chat = () => {
  const [msg, setMsg] = useState('inner msg');
  const submitMsg = () => {};

  useEffect(() => {}, []);
  return (
    <StyledChatBox>
      <StyledChatWindow>
        <StyledMsgOther>
          <ImageContainer className="avatar-chat">
            <p className="initials">JB</p>
          </ImageContainer>
          <div className="text-bubble">
            <div className="msg-txt">
              <div className="chat-username">Jacob</div>
              <div className="msg">{msg}</div>
              <span className="msg-info">12:29 PM</span>
            </div>
          </div>
        </StyledMsgOther>
        <StyledMsgMe>
          <ImageContainer className="avatar-chat">
            <p className="initials">ME</p>
          </ImageContainer>
          <div className="text-bubble">
            <div className="msg-txt">
              <div className="chat-username">You</div>
              <div className="msg">Thx i am fine</div>
              <span className="msg-info">12:31 PM</span>
            </div>
          </div>
        </StyledMsgMe>
      </StyledChatWindow>
      <StyledChatInput>
        <div className="input-wrapper">
          <div
            contentEditable="true"
            role="textbox"
            data-placeholder="Message"
            className="text-input"
            onInput={(e: React.KeyboardEvent<HTMLDivElement>) =>
              setMsg((e.target as HTMLInputElement).innerText)
            }
          />
          <div
            role="button"
            onClick={() => submitMsg()}
            className="send-btn-container"
            tabIndex={0}
          >
            <img src={sendImg} alt="" className="send-btn-img" />
          </div>
        </div>
      </StyledChatInput>
    </StyledChatBox>
  );
};

export default Chat;
