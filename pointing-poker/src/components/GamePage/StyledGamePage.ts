import styled from 'styled-components';

export const StyledGamePage = styled.div`
  .flex-box {
    display: flex;
  }
  .info {
    max-width: 1000px;
    width: 100%;
    padding: 30px 30px 30px 0;
    .scram-master-container {
      margin-bottom: 50px;
      .flex-box {
        justify-content: space-between;
      }
      .stop-game-btn {
        align-self: flex-end;
      }
    }
    .timer-block {
      height: 160px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 120px;
    }
  }

  .strip {
    min-height: 880px;
    height: 100;
    background-color: rgba(0, 0, 0, 0.25);
    width: 1px;
  }
`;
