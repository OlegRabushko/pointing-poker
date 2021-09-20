import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';
import { StyledScramMasterSection } from './StyledScramMasterSection';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { setStartTime } from '../../redux/TimerRedux/TimerActions';
import { RootState } from '../../redux';

export const ScramMaster = () => (
  <StyledScramMasterSection>
    <div className="text">Scram master</div>
    <UserCard />
  </StyledScramMasterSection>
);

const ScramMasterSection = () => {
  const dispatch = useDispatch();
  const timeStore = useSelector((store: RootState) => store.timer);
  const startGame = () => {
    dispatch(setStartTime([timeStore.minutes, timeStore.seconds]));
  };

  return (
    <StyledScramMasterSection>
      <ScramMaster />
      <div className="key-text">Key to lobby:</div>
      <div className="flex-box">
        <input type="text" defaultValue="2Rt9g5f1" />
        <Button colorBG={blueColor} color={whiteColor} text="Copy" />
      </div>
      <div className="flex-box-2">
        <Link to="/game-dealer">
          <Button onClick={startGame} colorBG={blueColor} color={whiteColor} text="Start Game" />
        </Link>
        <Link to="/">
          <Button colorBG={whiteColor} color={blueColor} text="Cancel Game" />
        </Link>
      </div>
    </StyledScramMasterSection>
  );
};

export default ScramMasterSection;
