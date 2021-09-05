import styled from 'styled-components';

export const UserCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 22px 18px;
  width: 500px;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 83px;
  height: 83px;
  border-radius: 50%;
  background-color: #60dabf;

  & > .initials {
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const UserInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  flex: 1 0 auto;

  & > .card__user-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    line-height: 56px;
    display: flex;
    align-items: center;

    color: #000000;

    & > .card__user-position {
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

export const ExcludeBtn = styled.div`
  cursor: pointer;
`;
