import { StyleLobbyHeaderBlock } from './StyledLobbyHeaderBlock';
import editPencil from '../../assets/icons/edit_pencil.svg';

const LobbyHeaderBlock = () => {
  return (
    <StyleLobbyHeaderBlock>
      <div className="header-text">Spring 23 planning</div>
      <img src={editPencil} alt="" />
    </StyleLobbyHeaderBlock>
  );
};

export default LobbyHeaderBlock;
