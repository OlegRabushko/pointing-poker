import { IMsg, IUsers } from '../../types/interfaces';
import { vME, vOTHERS } from '../../types/virables';
import { StyledMsg } from './StyledChatMsg';
import { ImageContainer } from '../UserCard/StyledUserCard';

interface IProps {
  users: IUsers;
  currUserID: string;
  msgData: IMsg;
}

const ChatMessage = ({
  msgData: { msgId, userId, username, msgText, msgDate },
  currUserID,
  users,
}: IProps): JSX.Element => {
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

export default ChatMessage;
