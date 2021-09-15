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
  z-index: 100;
  background: rgba(196, 196, 196, 0.6);

  .connect-form-wrapper {
    padding: 0 0 80px 30px;

    @media (max-width: 700px) {
      padding: 0 0 40px 15px;
    }
  }

  .connect-buttons-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
