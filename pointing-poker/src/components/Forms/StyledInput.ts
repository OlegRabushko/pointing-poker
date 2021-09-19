import styled from 'styled-components';
import { blueColor } from '../GlobalStyle/StyledGlobal';
import { IInputProps } from './FormTypes';

export const StyledInput = styled.input<IInputProps>`
  display: block;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '467px'};
  height: 47px;
  padding: 0 0 0 15px;
  font-size: 24px;
  font-weight: 500;
  border: 1px solid ${blueColor};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => borderRadius || '0px 0px 0px 10px'};
  outline: none;
  margin: ${({ margin }) => margin || '0 0 10px 0'};

  &:focus {
    box-shadow: inset 0 0 4px black;
  }

  @media (max-width: 700px) {
    font-size: 19px;
    height: 40px;
  }
`;
