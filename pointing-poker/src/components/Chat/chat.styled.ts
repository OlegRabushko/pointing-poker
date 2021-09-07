import styled from 'styled-components';

export const StyledChatBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 80vh;
`;

export const StyledChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const StyledMsgMe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0.5rem 0;

  .msg-txt {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 75%;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-wrap: break-word;
    width: fit-content;
    background-color: #248bf5;
    color: #fff;
  }

  .msg-txt::before {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;

    border-bottom-left-radius: 0.8rem 0.7rem;
    border-right: 1rem solid #248bf5;
    right: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .msg-txt::after {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;

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

  .msg-txt {
    border-radius: 1.15rem;
    line-height: 1.25;
    max-width: 75%;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-wrap: break-word;
    width: fit-content;

    background-color: #e5e5ea;
    color: #000;
  }

  .msg-txt::before {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;

    border-bottom-right-radius: 0.8rem 0.7rem;
    border-left: 1rem solid #e5e5ea;
    left: -0.35rem;
    transform: translate(0, -0.1rem);
  }

  .msg-txt::after {
    bottom: -0.1rem;
    content: '';
    height: 1rem;
    position: absolute;

    background-color: #fff;
    border-bottom-right-radius: 0.5rem;
    left: 20px;
    transform: translate(-30px, -2px);
    width: 10px;
  }
`;

export const StyledChatInput = styled.form``;
