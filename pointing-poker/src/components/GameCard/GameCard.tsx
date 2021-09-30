import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { sendCard, sendDeletedCard } from '../../sockets/SocketsAPI';
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
  const stats = useSelector(
    (store: RootState) => store.card.store.find((el) => el.id === ID).stats,
  );
  const gameID = useSelector((store: RootState) => store.initial.gameId);
  const [isSelected, setIsSelected] = useState(false);
  const { seconds, minutes } = useSelector((store: RootState) => store.timer);

  useEffect(() => {
    if (isSelected && seconds === 0 && minutes === 0) {
      setIsSelected(false);
      setChoseCard(1);
    }
  }, [seconds]);

  const choiceCard = () => {
    if (choseCard === 1 && !isSelected) {
      setIsSelected(true);
      setChoseCard((prev) => prev + 1);
      sendCard(ID, gameID);
    }
    if (choseCard !== 1 && isSelected) {
      setIsSelected(false);
      setChoseCard((prev) => prev - 1);
      sendDeletedCard(ID, gameID);
    }
  };

  return (
    <>
      {stats > 0 || !isStats ? (
        <StyledGameCard isStats={isStats} onClick={choiceCard}>
          {isSelected && !isStatisticSection && <div className="selected-card-skin" />}
          {isStats && <div className="stats">{stats}%</div>}
          <div className="type-left">{type}</div>
          {typeof content === 'number' ? (
            <div className="number">{content}</div>
          ) : (
            <img src={content} alt="ico" />
          )}
          <div className="type-right">{type}</div>
        </StyledGameCard>
      ) : null}
    </>
  );
};
export default GameCard;
