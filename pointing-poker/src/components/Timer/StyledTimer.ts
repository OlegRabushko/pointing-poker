import styled from 'styled-components';

export const StyledTimer = styled.div`
  display: flex;
  width: 200px;
  height: 80px;
  justify-content: space-between;
  padding: 0 10px;
  border-radius: 5px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div {
    font-weight: bold;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }
  input {
    text-align: center;
    appearance: none;
    font-size: 45px;
    width: 75px;
    height: 55px;
    outline: none;
    border: none;
    box-shadow: inset 0 2px 3px -1px grey;
    border-radius: 5px;
  }
  .points {
    margin-top: 10px;
    font-size: 45px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
