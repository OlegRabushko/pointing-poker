import styled from 'styled-components';

interface Iprops {
  checked: boolean;
}

export const StyleSwitcher = styled.div<Iprops>`
  position: relative;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  label {
    opacity: 1;
    width: 0;
    height: 0;
  }
  span {
    right: 0;
    position: absolute;
    cursor: pointer;
    width: 80px;
    height: 40px;
    background: ${(props) => (props.checked ? '#60dabf' : '#c4c4c4')};
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    transition: 0.7s;
    &::before {
      transform: ${(props) => (props.checked ? 'translateX(-40px)' : 'translateX(0px)')};

      content: '';
      position: absolute;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      top: 5px;
      right: 5px;
      transition: 0.7s;
    }
  }
`;
