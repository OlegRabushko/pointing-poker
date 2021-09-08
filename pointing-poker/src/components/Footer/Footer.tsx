import { StyleFooter } from './StyledFooter';
import gitLogo from '../../assets/icons/github-ico.svg';

const Footer = () => {
  return (
    <StyleFooter>
      <div className="fon">
        <div className="container">
          <img src={gitLogo} alt="" />
          <ul>
            <li>
              <a href="https://github.com/maksguido1987">Maksguido1987</a>
            </li>
            <li>
              <a href="https://github.com/SaXaPhonist">SaXaPhonist</a>
            </li>
            <li>
              <a href="https://github.com/OlegRabushko">OlegRabushko</a>
            </li>
          </ul>
        </div>
      </div>
    </StyleFooter>
  );
};

export default Footer;
