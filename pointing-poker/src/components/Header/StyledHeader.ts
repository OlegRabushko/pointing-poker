import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;
  padding: 0 0 0 64px;
  width: 100%;
  height: 70px;
  background-color: #ccc;
  background: linear-gradient(0deg, rgb(102, 153, 155) 29%, rgb(43, 58, 103) 29%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const IconStyled = styled.div`
  width: 78px;
  height: 78px;
  margin: 15px 0 0 0;
  background: url('../../assets/icons/logo.svg') center / cover no-repeat;
`;

export const ChatIcoStyled = styled.div`
  position: absolute;
  width: 45px;
  height: 30px;
  right: 5%;
  top: 10px;
  border-radius: 5px;
  background: url('../../assets/icons/chat-ico.png') center / cover no-repeat;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;
