import { StyleLobbyHeaderSection } from './StyledLobbyHeaderSection';
import editPencil from '../../assets/icons/edit_pencil.svg';

const LobbyHeaderSection = () => {
  return (
    <StyleLobbyHeaderSection>
      <div className="header-text">Spring 23 planning</div>
      <img src={editPencil} alt="" />
    </StyleLobbyHeaderSection>
  );
};

export default LobbyHeaderSection;
