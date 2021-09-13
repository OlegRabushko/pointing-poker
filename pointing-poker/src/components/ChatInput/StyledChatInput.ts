import styled from 'styled-components';

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
