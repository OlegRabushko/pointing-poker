import styled from 'styled-components';
import { blueColor, beigeColor } from '../GlobalStyle/StyledGlobal';

interface Iprops {
  isStats: boolean;
}

export const StyledGameCard = styled.div<Iprops>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 165px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border-radius: 1px solid #b9b9b9;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: default;
  margin: ${(props) => (props.isStats ? '50px 5px 0px' : '10px 3px 0')};
  img {
    width: 70px;
    margin-bottom: 10px;
    @media (max-width: 650px) {
      width: 40px;
    }
  }
  .stats {
    color: ${blueColor};
    text-shadow: 0 0 5px ${beigeColor};
    font-size: 25px;
    top: -30px;
    position: absolute;
    @media (max-width: 650px) {
      font-size: 18px;
    }
  }
  .number {
    font-size: 60px;
    text-shadow: 0px 0px 5px ${beigeColor};
    @media (max-width: 650px) {
      font-size: 40px;
    }
  }
  .type-left {
    align-self: flex-start;
  }
  .type-right {
    align-self: flex-end;
  }
  @media (max-width: 650px) {
    width: 70px;
    height: 120px;
    font-size: 14px;
  }
`;
