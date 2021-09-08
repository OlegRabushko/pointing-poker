import logo from '../../assets/icons/logo.svg';
import { StyleHeader } from './StyledHeader';

const Header = () => {
  return (
    <StyleHeader>
      <img src={logo} alt="logo" />
      <div className="fon-1"></div>
      <div className="fon-2"></div>
    </StyleHeader>
  );
};

export default Header;
