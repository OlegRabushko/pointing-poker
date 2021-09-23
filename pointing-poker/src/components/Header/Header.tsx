import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { setOpenChat } from '../../redux/ChatRedux/ChatActions';
import { setMiniGame } from '../../redux/InitialRedux/InitialActions';
import { HeaderStyled, IconStyled, ChatIcoStyled, MiniGameIcoStyled } from './StyledHeader';

export default function Header() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const openChat = () => dispatch(setOpenChat(true));
  const openMiniGame = () => dispatch(setMiniGame(true));

  return (
    <HeaderStyled>
      {location !== '/' && location !== '/results' && (
        <MiniGameIcoStyled onClick={openMiniGame}>
          <p>
            Play! If you are tired of boring assessments or too lazy to correspond with
            colleagues☻☺☻
          </p>
        </MiniGameIcoStyled>
      )}
      {location !== '/' && location !== '/results' && <ChatIcoStyled onClick={openChat} />}
      <IconStyled />
    </HeaderStyled>
  );
}
