import styled from 'styled-components';
import { ILabelProps } from './FormTypes';

export const StyledLabel = styled.label<ILabelProps>`
  display: ${({ display }) => display || 'block'};
  position: relative;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth || '467px'};
  font-weight: 700;
  padding: ${({ padding }) => padding || '0 0 20px 0'};

  &:last-child {
    margin: 0;
  }

  @media (max-width: 700px) {
    font-size: 18px;
    margin: 0 0 10px 0;
  }
`;
