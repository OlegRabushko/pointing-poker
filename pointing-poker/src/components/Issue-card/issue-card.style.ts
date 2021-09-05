import styled from 'styled-components';

interface Iprops {
  current: boolean;
}

export const IssueCardContainer = styled.div<Iprops>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 22px;
  width: 500px;
  height: 120px;
  background: ${(props) => (props.current ? 'rgba(96, 218, 191, 0.33)' : '#ffffff')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .edit-wrapper {
    display: flex;
    flex-direction: row;
    padding-left: 125px;
    background-color: ${(props) => (props.current ? 'rgba(96, 218, 191, 0)' : '#ffffff')};
  }

  .btn {
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    background-color: ${(props) => (props.current ? 'rgba(96, 218, 191, 0)' : '#ffffff')};
  }

  .btn > .edit-img {
    width: 54px;
    height: 54px;
  }

  .delete-btn {
    margin-left: 25px;
  }
`;

export const IssueInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  & > .issue-card__name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 56px;
    display: flex;
    align-items: center;

    color: #000000;

    & > .issue-card__prior {
      font-size: 10px;
      line-height: 12px;
    }

    & > .current-issue,
    .plug {
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
