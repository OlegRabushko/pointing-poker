import styled from 'styled-components';

export const StyledChatBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 80vh;
  width: 400px;
`;

export const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);

  .msg-txt {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 100%;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-break: break-word;
    width: fit-content;
  }

  .msg-txt::before {
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
    font-weight: 500;
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

export const StyledMsgMe = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
  margin: 0.5rem 0;

  .text-bubble {
    justify-content: flex-end;
    margin: 0 7px 0 15px;
  }

  .chat-username {
    color: yellowgreen;
  }

  .msg-txt {
    background-color: #248bf5;
    color: #fff;
  }

  .msg-txt::before {
    border-bottom-left-radius: 0.8rem 0.7rem;
    border-right: 1rem solid #248bf5;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .msg-txt::after {
    background-color: #fff;
    border-bottom-left-radius: 0.5rem;
    right: -40px;
    transform: translate(-30px, -2px);
    width: 10px;
  }
`;

export const StyledMsgOther = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  align-items: flex-start;

  .text-bubble {
    justify-content: flex-start;
    margin: 0 15px 0 7px;
  }

  .chat-username {
    color: orange;
  }

  .msg-txt {
    background-color: #e5e5ea;
    color: #000;
  }

  .msg-txt::before {
    border-bottom-right-radius: 0.8rem 0.7rem;
    border-left: 1rem solid #e5e5ea;
    left: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .msg-txt::after {
    background-color: #fff;
    border-bottom-right-radius: 0.5rem;
    left: 20px;
    transform: translate(-30px, -2px);
    width: 10px;
  }
`;

export const StyledChatInput = styled.form`
  .input-wrapper {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    /* padding: 5px 10px; */
    border: 2px solid #f2f2f2;
  }

  .text-input {
    padding: 10px 5px;
    border: none;
    background-color: #ffffff;
    outline: none;
    resize: none;
    width: 400px;
    word-break: break-word;
  }

  [contentEditable='true']:empty::before {
    content: attr(data-placeholder);
    color: #a2acb4;
  }

  .send-btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    background-color: #248bf5;
    cursor: pointer;
  }

  .send-btn-img {
    transition: transform 0.5s ease-in-out;
  }
  .send-btn-img:hover {
    transform: rotate(-90deg);
    transition: transform 0.5s ease-in-out;
  }
`;
