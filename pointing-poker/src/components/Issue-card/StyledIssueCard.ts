import styled from 'styled-components';

interface Iprops {
  current: boolean;
}

export const IssueCardContainer = styled.div<Iprops>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 22px;
  margin-right: 10px;
  margin-top: 10px;
  width: 300px;
  height: 75px;
  background: ${(props) => (!props.current ? 'rgba(96, 218, 191, 0.33)' : '#ffffff')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  .edit-wrapper {
    display: flex;
    flex-direction: row;
    padding-left: 40px;
    .edit-img,
    .delete-img {
      cursor: pointer;
      width: 35px;
    }
    .delete-img {
      margin-left: 15px;
    }
  }
  .plus-img {
    cursor: pointer;
    width: 35px;
  }
`;

export const IssueInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;

  .issue-card__name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    margin-top: 5px;
    display: flex;
    align-items: center;
  }
`;
