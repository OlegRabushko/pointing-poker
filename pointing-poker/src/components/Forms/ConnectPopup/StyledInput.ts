import styled from 'styled-components';

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 47px;
  padding: 0 0 0 15px;
  font-size: 21px;
  font-weight: 500;
  border: 1px solid #2b3a67;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 10px;
  outline: none;
  margin: 0 0 10px 0;

  &:focus {
    box-shadow: inset 0 0 4px black;
  }

  @media (max-width: 700px) {
    font-size: 19px;
    height: 40px;
  }
`;
