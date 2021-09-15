import { Link } from 'react-router-dom';
import MembersBlock from '../MembersBlock/MembersBlock';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import { ScramMaster } from '../ScramMasterBlock/ScramMasterBlock';
import Button from '../Button/Button';
import { StyledLobbyPage } from './StyledLobbyPage';

const LobbyPage = () => {
  return (
    <StyledLobbyPage>
      <LobbyHeaderBlock />
      <ScramMaster />
      <Link to="/">
        <div className="container">
          <Button text="Exit" color="#2B3A67" colorBG="#fff" />
        </div>
      </Link>
      <MembersBlock />
    </StyledLobbyPage>
  );
};

export default LobbyPage;
