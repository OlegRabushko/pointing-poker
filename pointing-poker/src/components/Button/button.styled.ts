import styled from 'styled-components';

interface Iprops {
  colorBG: string;
  color: string;
  mainPage?: boolean;
}

export const StyleButton = styled.div<Iprops>`
  button {
    background-color: ${(props) => props.colorBG};
    outline: none;
    border: none;
    height: ${(props) => (props.mainPage ? '50px' : '40px')};
    width: ${(props) => (props.mainPage ? '240px' : '180px')};
    cursor: pointer;
    color: ${(props) => props.color};
    font-size: 24px;
    font-weight: bold;
    border-radius: 3px;
    border: 1px solid #2b3a67;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.2;
    &:hover {
      color: ${(props) => props.colorBG};
      background-color: ${(props) => props.color};
    }
    @media (max-width: 700px) {
      width: 180px;
      font-size: 20px;
      height: 40px;
    }
  }
`;
