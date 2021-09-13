import { FC } from 'react';
import { StyleButton } from './StyledButton';

interface IButtonProps {
  color: string;
  colorBG: string;
  text: string;
  mainPage?: boolean;
  borderRadius?: string;
  display?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: FC<IButtonProps> = ({
  colorBG,
  text,
  color,
  mainPage,
  borderRadius,
  onClick,
  type,
  disabled,
}) => {
  return (
    <StyleButton
      onClick={onClick}
      color={color}
      colorBG={colorBG}
      mainPage={mainPage}
      borderRadius={borderRadius}
    >
      <button type={type} disabled={disabled}>
        {text}
      </button>
    </StyleButton>
  );
};

export default Button;
