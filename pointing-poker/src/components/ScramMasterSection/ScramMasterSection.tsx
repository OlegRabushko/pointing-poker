import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Button from '../Button/Button';
import { StyledScramMasterSection } from './StyledScramMasterSection';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { RootState } from '../../redux';
import ScramMasterCard from './ScramMasterCard';
import { getAllUsers } from '../../API/RestAPI';
import { sendSettingsToAll, sendTimerToAll } from '../../sockets/SocketsAPI';

const ScramMasterSection = () => {
  const gameID = useSelector((store: RootState) => store.initial.gameId);
  const { isDialer } = useSelector((store: RootState) => store.personStatus);
  const {
    scramMasterAsPlayer,
    changeCardInRoundEnd,
    timerNeeded,
    coffeeCardNeeded,
    questionCardNeeded,
    sequenceType,
  } = useSelector((store: RootState) => store.settings);
  const { minutes, seconds } = useSelector((store: RootState) => store.timer);

  const startGame = () => {
    sendTimerToAll({ minutes, seconds }, gameID);
    sendSettingsToAll(
      {
        scramMasterAsPlayer,
        changeCardInRoundEnd,
        timerNeeded,
        coffeeCardNeeded,
        questionCardNeeded,
        sequenceType,
      },
      gameID,
    );
  };

  const EntryKeyField = ({ gameKey }: { gameKey: string }) => {
    return <input className="scram-master-input" type="text" defaultValue={gameKey} />;
  };

  const copyGameID = () => {
    const link = document.querySelector('.scram-master-input') as HTMLInputElement;
    window.navigator.clipboard.writeText(link.value);
  };

  useEffect(() => {
    getAllUsers(gameID);
  }, []);

  return (
    <StyledScramMasterSection>
      <div className="text">Scram master</div>
      <ScramMasterCard />
      {isDialer && (
        <>
          <div className="key-text">Key to lobby:</div>
          <div className="flex-box">
            <EntryKeyField gameKey={gameID} />
            <Button colorBG={blueColor} color={whiteColor} text="Copy" onClick={copyGameID} />
          </div>
        </>
      )}
      <div className="flex-box-2">
        {isDialer && (
          <Link to="/game">
            <Button onClick={startGame} colorBG={blueColor} color={whiteColor} text="Start Game" />
          </Link>
        )}
        <Link to="/">
          <Button colorBG={whiteColor} color={blueColor} text={isDialer ? 'Cancel Game' : 'Exit'} />
        </Link>
      </div>
    </StyledScramMasterSection>
  );
};

export default ScramMasterSection;
