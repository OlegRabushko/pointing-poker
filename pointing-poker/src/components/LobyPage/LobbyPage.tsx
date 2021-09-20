import { Link } from 'react-router-dom';
import MembersSection from '../MembersSection/MembersSection';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import Button from '../Button/Button';
import { StyledLobbyPage } from './StyledLobbyPage';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import ScramMasterSection from '../ScramMasterSection/ScramMasterSection';

const LobbyPage = () => {
  return (
    <StyledLobbyPage>
      <LobbyHeaderSection />
      <ScramMasterSection />
      <Link to="/">
        <div className="container">
          <Button text="Exit" color={blueColor} colorBG={whiteColor} />
        </div>
      </Link>
      <MembersSection />
    </StyledLobbyPage>
  );
};

export default LobbyPage;
