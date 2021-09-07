import styled from 'styled-components';

export const StyledConnectForm = styled.form`
  width: 100%;
  max-width: 876px;
  background-color: #fff;
  padding: 15px;

  > legend {
    width: 100%;
    text-align: center;
    color: #000;
    font-size: 64px;
    font-weight: 700;
    padding: 45px 0;
  }

  .connect-label {
    display: block;
    position: relative;
    font-size: 24px;
    width: 100%;
    max-width: 467px;
    font-weight: 700;
    padding: 0 0 20px 0;
  }

  .upload-label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 47px;
    max-width: 276px;
    margin: 0 0 20px 0;
    padding: 0;
    font-family: Roboto;
    font-weight: 300;
    font-size: 24px;
    cursor: pointer;
    border: 1px solid #eeeeee;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 0px 10px;
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
