import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { StyleLobbyHeaderSection } from './StyledLobbyHeaderSection';

const LobbyHeaderSection = () => {
  const { gameTitle } = useSelector((state: RootState) => state.initial);

  return (
    <StyleLobbyHeaderSection>
      <div className="header-text">{gameTitle}</div>
    </StyleLobbyHeaderSection>
  );
};

export default LobbyHeaderSection;
