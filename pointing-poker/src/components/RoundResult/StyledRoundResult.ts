import styled from 'styled-components';
import { whiteColor } from '../GlobalStyle/StyledGlobal';

export const StyledRoundResult = styled.div`
  width: 450px;
  position: fixed;
  height: 640px;
  padding: 20px 0;
  border-radius: 10px;
  background-color: rgb(43, 58, 103, 0.9);
  left: 50%;
  transform: translateX(-50%);

  .full-container {
    top: 140px;
    height: 600px;
    padding: 10px 20px 30px 30px;
    border-radius: 5px;
    overflow: auto;
    ::-webkit-scrollbar-track {
      -webkit-border-radius: 10px;
      background-color: #32312e;
      box-shadow: 0px 0px 3px #000 inset;
    }
    ::-webkit-scrollbar-thumb {
      -webkit-border-radius: 5px;
      background-color: #fee6cc;
      background-position: center;
      background-repeat: no-repeat;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
  }

  .flex-box {
    display: flex;
    justify-content: space-between;
  }
  .top-text {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    color: ${whiteColor};
    img {
      cursor: pointer;
      width: 40px;
      transition: 0.1s;
      border-radius: 50%;
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 5px ${whiteColor};
      }
    }
  }
  @media (max-width: 650px) {
    width: 400px;
  }
  @media (max-width: 650px) {
    transform: scale(0.8);
    top: 5%;
    left: 10%;
  }
`;
