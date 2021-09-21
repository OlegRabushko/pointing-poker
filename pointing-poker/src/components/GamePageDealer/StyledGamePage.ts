import styled from 'styled-components';

export const StyledGamePage = styled.div`
  position: relative;
  .issues-container {
    display: flex;
  }

  .info {
    .results-ico {
      position: absolute;
      top: 50px;
      right: 0px;
      width: 50px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.3);
      }
    }
    .scram-master-container {
      margin: 60px 0 50px;
      display: flex;
      justify-content: space-between;
      .stop-game-btn {
        align-self: flex-end;
      }
    }
    .timer-block {
      height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 120px;
    }
    @media (max-width: 650px) {
      margin-left: -70px;
      margin-top: -130px;
      transform: scale(0.7);
    }
  }
  .cards-section {
    margin: 35px;
    @media (max-width: 650px) {
      margin: 10px;
    }
  }
  .text {
    /* text-align: left !important; */
    margin-left: 50px;
  }
`;
