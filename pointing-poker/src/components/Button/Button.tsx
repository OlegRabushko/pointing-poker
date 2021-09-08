import { FC } from 'react';
import { StyleButton } from './StyledButton';

interface IButtonProps {
  color: string;
  colorBG: string;
  text: string;
  mainPage?: boolean;
}

const Button: FC<IButtonProps> = ({ colorBG, text, color, mainPage }) => {
  return (
    <StyleButton color={color} colorBG={colorBG} mainPage={mainPage}>
      <button>{text}</button>
    </StyleButton>
  );
};

export default Button;
