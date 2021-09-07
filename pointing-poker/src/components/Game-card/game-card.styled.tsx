import styled from 'styled-components';

interface Iprops {
  selected: boolean;
}

export const StyledGameCard = styled.div<Iprops>`
  display: flex;
  position: relative;
  flex-direction: column;
  cursor: pointer;
  width: 500px;
  height: 800px;
  color: ${(props) => (props.selected ? 'rgba(0,0,0, 0.45)' : ' #000000')};
  background: ${(props) => (props.selected ? '#60DABF75' : ' #ffffff')};
  border: 3px solid #eeeeee;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 67px;

  & > .card-selected-icon {
    display: ${(props) => (props.selected ? 'block' : 'none')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & > .card-score {
    display: flex;
    font-weight: bold;
    font-size: 64px;
    line-height: 81px;
    padding-left: 40px;
  }

  .card-score.up {
    display: flex;
    flex-direction: row;
    padding: 20px 40px 0px 40px;

    justify-content: space-between;
  }

  .card-score > .card-input-score {
    border: none;
    outline: none;
    font-family: 'Roboto';
    font-weight: bold;
    font-style: normal;
    width: 300px;
    font-size: 64px;
    line-height: 81px;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }

  .card-score > .card-input-score:disabled {
    font-weight: bold;
    font-style: normal;
    color: ${(props) => (props.selected ? 'rgba(0,0,0, 0.45)' : ' #000000')};
    background-color: ${(props) => (props.selected ? 'rgba(96, 218, 191, 0)' : ' #ffffff')};
    box-shadow: 0px 0px 0px 0px;
  }
  .card-score > .pencil {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  .card-score.down {
    padding-top: 20px;
    justify-content: start;
    transform: rotate(180deg);
  }

  .score-type {
    display: flex;
    justify-content: center;
    flex: 1 0 auto;
    font-weight: bold;
    font-size: 288px;
    line-height: 365px;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;
