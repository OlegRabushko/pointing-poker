import React from 'react';
import { InputProps } from '../FormTypes';
import { StyledInput } from '../ConnectPopup/StyledInput';
import { StyledLabel } from '../ConnectPopup/StyledLabel';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <StyledLabel className={props.labelClass || 'connect-label'}>
    {props.labelText}
    <StyledInput
      defaultValue={props.defaultValue}
      ref={ref}
      className={props.inputClass || 'connect-input'}
    />
  </StyledLabel>
));

Input.displayName = 'Input';
export default Input;
