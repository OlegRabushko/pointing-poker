import styled from 'styled-components';

export const StyledChatBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 85vh;
  width: 400px;
  z-index: 10;
`;

export const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 2 85vh;
  padding: 5px 5px 0 5px;
  overflow-y: scroll;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgb(0 0 0 / 14%), 0 4px 8px rgb(0 0 0 / 28%);

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
