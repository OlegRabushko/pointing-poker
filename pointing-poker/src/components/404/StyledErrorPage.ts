import styled from 'styled-components';

export const StyledErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  font-weight: 900;
  background-color: #666;

  .error-text {
    color: #fff;
    font-size: 80px;
  }

  .home {
    cursor: pointer;
    font-size: 21px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
