import styled, { css } from 'styled-components';
import { vME } from '../../types/virables';

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

export const StyledMsg = styled.div`
  display: flex;
  ${({ viewType }: { viewType: string }) =>
    viewType === vME
      ? css`
          flex-direction: row-reverse;
          align-items: flex-end;
        `
      : css`
          flex-direction: row;
          align-items: flex-start;
        `};
  margin: 0.5rem 0;

  .text-bubble {
    ${({ viewType }: { viewType: string }) =>
      viewType === vME
        ? css`
            justify-content: flex-end;
            margin: 0 7px 0 15px;
          `
        : css`
            justify-content: flex-start;
            margin: 0 15px 0 7px;
          `};
  }

  .chat-username {
    color: ${({ viewType }: { viewType: string }) => (viewType === vME ? 'yellowgreen' : 'orange')};
  }

  .msg-txt {
    background-color: ${({ viewType }: { viewType: string }) =>
      viewType === vME ? '#248bf5' : '#248bf5'};
    color: #fff;
  }

  .msg-txt::before {
    border-right: ${({ viewType }: { viewType: string }) =>
      viewType === vME ? '1rem solid #248bf5; ' : '1rem solid #e5e5ea;'};
    border-bottom-left-radius: 0.8rem 0.7rem;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .msg-txt::after {
    ${({ viewType }: { viewType: string }) =>
      viewType === vME
        ? css`
            right: -40px;
          `
        : css`
            left: 20px;
          `};
    background-color: #fff;
    border-bottom-left-radius: 0.5rem;

    transform: translate(-30px, -2px);
    width: 10px;
  }
`;

export const StyledChatInput = styled.form`
  .input-wrapper {
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    border-top: 2px solid #f2f2f2;
    border-bottom: 3px solid #f2f2f2;
  }

  .text-input {
    font-family: 'Roboto';
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
