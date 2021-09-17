import styled from 'styled-components';
import { whiteColor } from '../GlobalStyle/StyledGlobal';

export const StyledUserCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 10px 0 0;
  width: 300px;
  height: 70px;
  background: ${whiteColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const StyledUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  padding-top: 10px;
  flex: 1 0 auto;

  .card-user-name {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    display: flex;
    align-items: center;
    color: #000000;
  }
  .card-user-position {
    font-size: 12px;
  }
`;

export const ExcludeBtn = styled.div`
  img {
    cursor: pointer;
    width: 30px;
  }
`;
