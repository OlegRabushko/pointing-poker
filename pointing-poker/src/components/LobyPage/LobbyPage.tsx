import { Link } from 'react-router-dom';
import MembersSection from '../MembersSection/MembersSection';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import { ScramMaster } from '../ScramMasterSection/ScramMasterSection';
import Button from '../Button/Button';
import { StyledLobbyPage } from './StyledLobbyPage';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';

const LobbyPage = () => {
  return (
    <StyledLobbyPage>
      <LobbyHeaderSection />
      <ScramMaster />
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
