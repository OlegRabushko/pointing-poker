import styled from 'styled-components';
import { blueColor } from '../GlobalStyle/StyledGlobal';

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
  margin: ${(props) => (props.isStats ? '50px 5px 0px' : '10px 5px 0')};
  img {
    width: 70px;
    margin-bottom: 10px;
  }
  .stats {
    color: ${blueColor};
    text-shadow: 0 0 5px #fdd1a1;
    font-size: 25px;
    top: -30px;
    position: absolute;
  }
  .number {
    font-size: 60px;
    text-shadow: 0px 0px 5px #fdd1a1;
  }
  .type-left {
    align-self: flex-start;
  }
  .type-right {
    align-self: flex-end;
  }
`;
