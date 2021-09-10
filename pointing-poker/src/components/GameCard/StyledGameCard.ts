import styled from 'styled-components';

export const StyledGameCard = styled.div`
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
  margin-top: 10px;
  img {
    width: 70px;
    margin-bottom: 10px;
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
