import styled from 'styled-components';
import { blueColor, beigeColor } from '../GlobalStyle/StyledGlobal';
import selectedIco from '../../assets/icons/selected.png';

interface IStyledGameCardProps {
  isStats: boolean;
}

export const StyledGameCard = styled.div<IStyledGameCardProps>`
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
  cursor: pointer;
  margin: ${(props) => (props.isStats ? '50px 5px 0px' : '10px 3px 0')};

  img {
    width: 70px;
    margin-bottom: 10px;
    @media (max-width: 650px) {
      width: 40px;
    }
  }

  .selected-card-skin {
    position: absolute;
    background-color: rgba(96, 218, 191, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    &::after {
      position: absolute;
      content: url(${selectedIco});
      transform: scale(0.2);
      top: -65px;
      left: -10px;
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
