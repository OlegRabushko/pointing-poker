import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from '../Button/Button';
import { StyledScramMasterSection } from './StyledScramMasterSection';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { RootState } from '../../redux';
import { setStartTime } from '../../redux/TimerRedux/TimerActions';
import ScramMasterCard from './ScramMasterCard';
import { getAllUsers } from '../../API/RestAPI';

const ScramMasterSection = () => {
  const dispatch = useDispatch();
  const { timeStore, gameId } = useSelector((store: RootState) => ({
    timeStore: store.timer,
    gameId: store.initial.gameId,
  }));
  const isDialer = useSelector((store: RootState) => store.personStatus.isDialer);
  const startGame = () => {
    dispatch(setStartTime([timeStore.minutes, timeStore.seconds]));
  };

  const EntryKeyField = ({ gameKey }: { gameKey: string }) => {
    return <input className="scram-master-input" type="text" defaultValue={gameKey} />;
  };

  const copyGameID = () => {
    const link = document.querySelector('.scram-master-input') as HTMLInputElement;
    window.navigator.clipboard.writeText(link.value);
  };

  useEffect(() => {
    getAllUsers(gameId);
  }, []);

  return (
    <StyledScramMasterSection>
      <div className="text">Scram master</div>
      <ScramMasterCard />
      {isDialer && (
        <>
          <div className="key-text">Key to lobby:</div>
          <div className="flex-box">
            <EntryKeyField gameKey={gameId} />
            <Button colorBG={blueColor} color={whiteColor} text="Copy" onClick={copyGameID} />
          </div>
          <div className="flex-box-2">
            <Link to="/game-dealer">
              <Button
                onClick={startGame}
                colorBG={blueColor}
                color={whiteColor}
                text="Start Game"
              />
            </Link>
          </div>
        </>
      )}
      <Link to="/">
        <Button colorBG={whiteColor} color={blueColor} text={isDialer ? 'Cancel Game' : 'Exit'} />
      </Link>
    </StyledScramMasterSection>
  );
};

export default ScramMasterSection;
