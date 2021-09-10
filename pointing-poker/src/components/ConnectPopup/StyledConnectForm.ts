import styled from 'styled-components';

export const StyledConnectForm = styled.form`
  width: 100%;
  max-width: 876px;
  background-color: #fff;
  padding: 15px;

  legend {
    width: 100%;
    max-width: 520px;
    color: #000;
    font-size: 64px;
    font-weight: 700;

    @media (max-width: 700px) {
      font-size: 42px;
      padding: 0 0 20px 15px;
    }
  }

  .input-file-wrapper {
    display: flex;
    width: 100%;
    max-width: 467px;

    @media (max-width: 700px) {
      padding: 0 0 20px 15px;
    }
  }

  .legend-wrapper {
    display: flex;
    align-items: center;
    padding: 0 0 40px 30px;
  }

  .switcher-wrapper {
    display: flex;
    align-items: center;
    font-family: Ruda;
    font-weight: 700;
    font-size: 24px;

    p {
      padding: 0 20px;
      width: 183px;
    }
  }

  .connect-label {
    display: block;
    font-size: 24px;
    width: 100%;
    max-width: 467px;
    font-weight: 700;
    margin: 0 0 20px 0;

    @media (max-width: 700px) {
      font-size: 18px;
      margin: 0 0 10px 0;
    }
  }

  .upload-label {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 47px;
    max-width: 276px;
    margin: 0 0 20px 0;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 24px;
    cursor: pointer;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 0px 10px;

    @media (max-width: 700px) {
      font-size: 18px;
      height: 40px;
    }
  }

  .connect-input {
    display: block;
    width: 100%;
    height: 47px;
    padding: 0 0 0 15px;
    font-size: 21px;
    font-weight: 500;
    border: 1px solid #2b3a67;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 0px 10px;
    outline: none;
    margin: 0 0 10px 0;

    @media (max-width: 700px) {
      font-size: 19px;
      height: 40px;
    }
  }

  .upload-input {
    opacity: 0;
    position: absolute;
    z-index: -1;
    overflow: hidden;
    width: 0.4px;
    height: 0.4px;
  }
`;
