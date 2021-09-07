import styled from 'styled-components';

export const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 10px 0 0;
  width: 300px;
  height: 70px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: #60dabf;

  .initials {
    font-weight: bold;
    font-size: 32px;
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
  padding-top: 10px;
  flex: 1 0 auto;

  .card__user-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .card__user-position {
    font-size: 12px;
  }
`;

export const ExcludeBtn = styled.div`
  img {
    cursor: pointer;
    width: 30px;
  }
`;
