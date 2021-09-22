/* eslint-disable import/namespace */
import { useRef, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { StyledChatBox, StyledChatWindow } from './StyledChat';
import { IMsg } from '../../types/interfaces';
import { setMessage, setOpenChat } from '../../redux/ChatRedux/ChatActions';
import ChatMessage from '../ChatMessage/ChatMessage';
import ChatInput from '../ChatInput/ChatInput';
import { RootState } from '../../redux';
import { mouseDown, mouseMove, mouseUp } from './helper';

const Chat = () => {
  const [pointX, setPointX] = useState(0);
  const [pointY, setPointY] = useState(0);
  const [isMouseDown, setMouseDown] = useState(false);
  const location = useLocation().pathname;
  const [msg, setMsg] = useState('inner msg');
  const dispatch = useDispatch();
  const chatIsOpen = useSelector((store: RootState) => store.chat.isOpen);
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

  const closeChat = () => dispatch(setOpenChat(false));

  return (
    <>
      {location !== '/' && location !== '/results' && (
        <StyledChatBox
          chatIsOpen={chatIsOpen}
          onMouseDown={() => mouseDown(setMouseDown)}
          onMouseMove={(e) =>
            mouseMove(e, setMouseDown, setPointX, setPointY, pointX, pointY, isMouseDown, 550, 400)
          }
          onMouseUp={(e) => mouseUp(e, setMouseDown)}
        >
          <section className="header">
            <button onClick={closeChat} />
          </section>
          <StyledChatWindow>
            {msgs.map((msgData: IMsg, msgIndex) => (
              <ChatMessage key={msgIndex} users={users} currUserID={currUserID} msgData={msgData} />
            ))}
          </StyledChatWindow>
          <ChatInput submitMsg={submitMsg} setMsg={setMsg} txtRef={txtRef} />
        </StyledChatBox>
      )}
    </>
  );
};

export default Chat;
