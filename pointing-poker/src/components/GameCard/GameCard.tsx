import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setGameCard } from '../../redux/GameCardRedux/GameCardActions';
import { StyledGameCard } from './StyledGameCard';

interface IGameCardProps {
  type: string;
  content: string | number;
  ID: string | number;
  isStats: boolean;
  isStatisticSection?: boolean;
}

const GameCard: FC<IGameCardProps> = ({ isStats, ID, type, content, isStatisticSection }) => {
  const dispatch = useDispatch();
  const stats = useSelector(
    (store: RootState) => store.card.store.find((el) => el.id === ID).stats,
  );
  const isSelected = useSelector(
    (store: RootState) => store.card.store.find((el) => el.id === ID).selected,
  );

  //! что за хардкод?)
  const choiceCard = () => {
    dispatch(
      setGameCard({
        id: ID,
        chosen: 1,
        selected: true,
        content: '',
      }),
    );
  };

  return (
    <>
      {stats !== 0 || !isStats ? (
        <StyledGameCard isStats={isStats} onClick={() => choiceCard()}>
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
