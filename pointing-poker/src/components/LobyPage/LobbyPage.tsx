import { Link } from 'react-router-dom';
import MembersBlock from '../MembersBlock/MembersBlock';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import Button from '../Button/Button';
import { StyledLobbyPage } from './StyledLobbyPage';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import ScramMaster from '../ScramMaster/ScramMaster';

const LobbyPage = () => {
  return (
    <StyledLobbyPage>
      <LobbyHeaderBlock />
      <ScramMaster />
      <Link to="/">
        <div className="container">
          <Button text="Exit" color={blueColor} colorBG={whiteColor} />
        </div>
      </Link>
      <MembersBlock />
    </StyledLobbyPage>
  );
};

export default LobbyPage;
