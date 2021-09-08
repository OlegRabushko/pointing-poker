import styled from 'styled-components';

interface Iprops {
  gameWrapperStyle: boolean;
}

export const StyleBody = styled.div<Iprops>`
  margin: 0 auto;
  width: ${(props) => (props.gameWrapperStyle ? '1600px' : '1100px')};
  height: 100%;
  min-height: 880px;
  padding: ${(props) => (props.gameWrapperStyle ? '0 30px' : '30px 30px 100px 30px')};
  margin-bottom: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    width: 90%;
  }
`;
