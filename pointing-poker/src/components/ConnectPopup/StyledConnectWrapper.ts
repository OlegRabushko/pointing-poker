import styled from 'styled-components';

export const StyledConnectWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #c4c4c4;

  .connect-form-wrapper {
    padding: 0 0 100px 30px;
  }

  .connect-buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
