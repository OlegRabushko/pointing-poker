import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { setOpenChat } from '../../redux/ChatRedux/ChatActions';
import { HeaderStyled, IconStyled, ChatIcoStyled } from './StyledHeader';

export default function Header() {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const openChat = () => dispatch(setOpenChat(true));

  return (
    <HeaderStyled>
      {location !== '/' && location !== '/results' && <ChatIcoStyled onClick={openChat} />}
      <IconStyled />
    </HeaderStyled>
  );
}
