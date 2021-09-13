import styled from 'styled-components';

interface Iprops {
  colorBG: string;
  color: string;
  mainPage?: boolean;
  borderRadius?: string;
}

export const StyleButton = styled.div<Iprops>`
  button {
    background-color: ${({ colorBG }) => colorBG};
    outline: none;
    height: ${({ mainPage }) => (mainPage ? '60px' : '47px')};
    width: ${({ mainPage }) => (mainPage ? '241px' : '189px')};
    border-radius: ${({ borderRadius }) => borderRadius || '3px'};
    cursor: pointer;
    color: ${({ color }) => color};
    font-size: 24px;
    font-weight: bold;
    border: 1px solid #2b3a67;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: 0.2s;
    &:hover {
      color: ${({ colorBG }) => colorBG};
      background-color: ${({ color }) => color};
    }
    &:disabled {
      opacity: 0.5;
    }
    @media (max-width: 700px) {
      width: 189px;
      font-size: 20px;
      height: 40px;
    }
  }
`;
