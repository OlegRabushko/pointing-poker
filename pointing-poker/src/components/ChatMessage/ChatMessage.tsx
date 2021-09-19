import { IMsg, IUsers } from '../../types/interfaces';
import { vME, vOTHERS } from '../../types/globalVirables';
import { StyledMsg } from './StyledChatMsg';
import { ImageContainer } from '../Avatar/StyledAvatar';

interface IProps {
  users: IUsers;
  currUserID: string;
  msgData: IMsg;
}

const ChatMessage = ({
  msgData: { msgId, user_id, text, time },
  currUserID,
  users,
}: IProps): JSX.Element => {
  const currMsgUser = users[user_id];
  return (
    <StyledMsg key={msgId} viewType={user_id === currUserID ? vME : vOTHERS}>
      <ImageContainer className="avatar-chat">
        {currMsgUser.avatar ? (
          <img src={currMsgUser.avatar} className="" alt="avatar" />
        ) : (
          <p className="initials">{currMsgUser.name.slice(0, 1)}</p>
        )}
      </ImageContainer>
      <div className="text-bubble">
        <div className="msg-txt">
          <div className="chat-username">{currMsgUser.name}</div>
          <div className="msg">{text}</div>
          <span className="msg-info">{time}</span>
        </div>
      </div>
    </StyledMsg>
  );
};

export default ChatMessage;
