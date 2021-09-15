import { FC } from 'react';
import { StyleButton } from './StyledButton';

interface IButtonProps {
  color: string;
  colorBG: string;
  text: string;
  mainPage?: boolean;
  borderRadius?: string;
  display?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ colorBG, text, color, mainPage, borderRadius, onClick }) => {
  return (
    <StyleButton
      onClick={onClick}
      color={color}
      colorBG={colorBG}
      mainPage={mainPage}
      borderRadius={borderRadius}
    >
      <button>{text}</button>
    </StyleButton>
  );
};

export default Button;
