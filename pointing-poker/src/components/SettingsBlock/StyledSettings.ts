import styled from 'styled-components';

export const StyledSettingBlock = styled.div`
  margin-bottom: 40px;
  margin-top: 50px;
  .text {
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  .flex-box {
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    height: 60px;
    .setting-name {
      font-size: 24px;
      font-weight: bold;
      @media (max-width: 650px) {
        font-size: 20px;
      }
    }
  }
  .timer {
    margin-top: 10px;
    .setting-name {
      margin-top: 50px;
    }
  }
`;
