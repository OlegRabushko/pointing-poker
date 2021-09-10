import { FC } from 'react';
import { StyledGameCard } from './StyledGameCard';

interface IGameCardProps {
  type: string;
  content: string | number;
}

const GameCard: FC<IGameCardProps> = ({ type, content }) => {
  return (
    <StyledGameCard>
      <div className="type-left">{type}</div>
      {typeof content === 'number' ? (
        <div className="number">{content}</div>
      ) : (
        <img src={content} alt="coffee-ico" />
      )}
      <div className="type-right">{type}</div>
    </StyledGameCard>
  );
};
export default GameCard;
