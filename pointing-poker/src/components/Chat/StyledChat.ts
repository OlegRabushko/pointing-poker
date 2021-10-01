import styled from 'styled-components';
import { whiteColor } from '../GlobalStyle/StyledGlobal';

interface Iprops {
  chatIsOpen: boolean;
}

export const StyledChatBox = styled.div<Iprops>`
  display: ${(props) => (props.chatIsOpen ? 'flex' : 'none')};
  position: absolute;
  flex-direction: column;
  overflow: hidden;
  height: 550px;
  width: 400px;
  top: 100px;
  right: 100px;
  z-index: 10;
  border-radius: 10px 10px 0 0;

  .header {
    z-index: 2;
    height: 70px;
    background-color: rgba(43, 58, 103, 0.9);
    cursor: grab;

    button {
      z-index: 5;
      margin: 10px 0 0 350px;
      width: 30px;
      height: 30px;
      outline: none;
      border: none;
      border-radius: 50%;
      box-shadow: 0px 0px 7px rgb(166, 213, 247);
      font-size: 22px;
      text-align: center;
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s;
      cursor: pointer;

      &:hover {
        background-color: ${whiteColor};
      }

      &::after {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        content: 'X';
      }
    }
  }
`;

export const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 2 85vh;
  padding: 5px 5px 0 5px;
  overflow-y: scroll;
  background-color: #f8f8ff;
  box-shadow: inset 0 0 4px rgb(0 0 0 / 14%), inset 0 0px 0px rgb(0 0 0 / 28%);
  border: 1px solid #c5d0db;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .msg-txt {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 300px;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-break: break-word;
    width: fit-content;
    background-color: #b0c0d9;
  }

  .msg-txt::before {
    border-right: 1rem solid #b0c0d9;
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;
  }

  .msg-txt::after {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;
  }

  .text-bubble {
    display: flex;
    flex-direction: column;
    flex-direction: row;
  }

  .chat-username {
    padding: 0 0 3px 0;
    font-weight: 600;
    letter-spacing: 0.8px;
    color: #292929;
  }

  .msg {
    position: relative;
  }

  .msg-info {
    font-size: 12px;
    user-select: none;
    padding: 0 0 0 0;
    line-height: 1;
    vertical-align: bottom;
  }
`;
