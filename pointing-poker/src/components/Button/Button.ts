import styled from 'styled-components';

interface IButton {
  background?: string;
  height?: string;
  width?: string;
  display?: string;
  borderRadius?: string;
  color?: string;
}

export const Button = styled.button<IButton>`
  display: ${({ display }) => display || 'block'};
  width: ${({ width }) => width || '189px'};
  font-weight: bold;
  font-size: 24px;
  color: ${({ color }) => color || '#fff'};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ borderRadius }) => borderRadius || '0 5px 5px 0'};
  outline: none;
  border: 1px solid 2b3a67;
  cursor: pointer;
  height: ${({ height }) => height || '47px'};
  background-color: ${({ background }) => background || '#2B3A67'};
`;
