import { useState } from 'react';
import { StyledGameCard } from './game-card.styled';
import doneIcon from '../../assets/icons/selected.png';
import pencil from '../../assets/icons/edit_pencil.svg';
import coffe from '../../assets/icons/coffeBrake.png';

const GameCard = () => {
  const [selected, setSelected] = useState(false);
  const [score, setScore] = useState<string>('Unknown');
  const shortType = '';
  const diller = false;
  return (
    <StyledGameCard onClick={() => !diller && setSelected((prev) => !prev)} selected={selected}>
      <span role="group" className="card-score up">
        <input
          maxLength={10}
          type="text"
          defaultValue={score}
          disabled={!diller}
          className="card-input-score"
          onChange={(e) => setScore(e.target.value)}
        />
        {diller ? <img src={pencil} alt="edit" className="pencil" /> : null}
      </span>
      <div className="score-type">{shortType || <img src={coffe} alt="coffe brake" />}</div>
      <img src={doneIcon} alt="selected" className="card-selected-icon" />
      <span className="card-score down">{score}</span>
    </StyledGameCard>
  );
};
export default GameCard;
