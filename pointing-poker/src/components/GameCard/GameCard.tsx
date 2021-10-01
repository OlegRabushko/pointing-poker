import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import {
  sendCard,
  sendDeletedCard,
  sendIsUserCanceledCard,
  sendIsUserSelectedCard,
} from '../../sockets/SocketsAPI';
import { StyledGameCard } from './StyledGameCard';

interface IGameCardProps {
  type: string;
  content: string | number;
  ID: string | number;
  isStats: boolean;
  isStatisticSection?: boolean;
  choseCard?: number;
  setChoseCard?: React.Dispatch<React.SetStateAction<number>>;
}

const GameCard: FC<IGameCardProps> = ({
  isStats,
  ID,
  type,
  content,
  isStatisticSection,
  choseCard,
  setChoseCard,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const [flippedClass, setFlippedClass] = useState(false);
  const stats = useSelector(
    (store: RootState) => store.card.store.find((el) => el.id === ID).stats,
  );
  const gameID = useSelector((store: RootState) => store.initial.gameId);
  const userID = useSelector((store: RootState) => store.initial.currUserID);
  const isTimer = useSelector((store: RootState) => store.settings.timerNeeded);
  const playersCheckedCard = useSelector((store: RootState) => store.card.count);
  const scramMasterAsPlayer = useSelector((store: RootState) => store.settings.scramMasterAsPlayer);
  const allUsers = useSelector((store: RootState) => store.initial.users);
  const allUsersLength = Object.keys(allUsers).length;

  const { seconds, minutes } = useSelector((store: RootState) => store.timer);

  useEffect(() => {
    if (isSelected && seconds === 0 && minutes === 0) {
      setIsSelected(false);
      setChoseCard(1);
    }
    if (
      (isStats && seconds === 0 && minutes === 0) ||
      (!isTimer && scramMasterAsPlayer && playersCheckedCard === allUsersLength) ||
      (!isTimer && !scramMasterAsPlayer && playersCheckedCard === allUsersLength - 1)
    ) {
      setTimeout(() => setFlippedClass(true), 1000);
    } else {
      setFlippedClass(false);
    }
  }, [seconds]);

  const choiceCard = () => {
    if (choseCard === 1 && !isSelected) {
      sendIsUserSelectedCard(userID, gameID);
      setIsSelected(true);
      setChoseCard((prev) => prev + 1);
      sendCard(ID, gameID);
    }
    if (choseCard !== 1 && isSelected) {
      sendIsUserCanceledCard(userID, gameID);
      setIsSelected(false);
      setChoseCard((prev) => prev - 1);
      sendDeletedCard(ID, gameID);
    }
  };

  return (
    <>
      {stats > 0 || !isStats ? (
        <StyledGameCard
          selected={isSelected && !isStatisticSection}
          isStats={isStats}
          onClick={choiceCard}
        >
          <div className={`front ${flippedClass ? ' flipped-front' : 'front'}`}>
            {isStats && <div className="stats">{stats}%</div>}
            <div className="type-left">{type}</div>
            {typeof content === 'number' ? (
              <div className="number">{content}</div>
            ) : (
              <img src={content} alt="ico" />
            )}
            <div className="type-right">{type}</div>
          </div>
          <div className={` ${flippedClass ? 'back flipped-back' : 'back'}`} />
        </StyledGameCard>
      ) : null}
    </>
  );
};
export default GameCard;
