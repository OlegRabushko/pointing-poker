import { ImageContainer } from '../UserCard/user-card.styled';
import {
  StyledChatBox,
  StyledChatInput,
  StyledChatWindow,
  StyledMsgMe,
  StyledMsgOther,
} from './chat.styled';

const Chat = () => {
  return (
    <StyledChatBox>
      <StyledChatWindow>
        <StyledMsgOther>
          <ImageContainer>
            <p className="initials">JB</p>
          </ImageContainer>
          <div className="text-bubble">
            <p className="msg-txt">Hi, how are you</p>
            <span className="msg-info"></span>
          </div>
        </StyledMsgOther>
        <StyledMsgMe>
          <div className="text-bubble">
            <p className="msg-txt">I am fine</p>
            <span className="msg-info"></span>
          </div>
          <ImageContainer>
            <p className="initials">You</p>
          </ImageContainer>
        </StyledMsgMe>
      </StyledChatWindow>
      <StyledChatInput></StyledChatInput>
    </StyledChatBox>
  );
};

export default Chat;
