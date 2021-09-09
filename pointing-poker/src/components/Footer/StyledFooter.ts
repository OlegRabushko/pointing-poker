import styled from 'styled-components';

export const StyleFooter = styled.footer`
  display: flex;
  position: relative;
  ul {
    margin-left: 60px;
    text-decoration: none;
    height: 100%;
  }
  li {
    height: 15px;
  }
  img {
    top: 5px;
    position: absolute;
    width: 40px;
  }
  .fon {
    flex: 0 1 auto;
    /* bottom: 0; */
    width: 100%;
    height: 50px;
    background-color: #2b3a67;
    padding-left: 20px;
  }
  .container {
    text-align: center;
    display: flex;
    padding-left: 20px;
  }
  a {
    color: white;
    font-size: 12px;
    text-shadow: 0px 0px 5px #66999b;
  }
`;
