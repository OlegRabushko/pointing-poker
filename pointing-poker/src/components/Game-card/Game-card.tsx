import { useState } from 'react';
import { GameCardContainerDiv } from './game-card.style';
import doneIcon from '../../assets/icons/selected.png';
import pencil from '../../assets/icons/edit_pencil.svg';
import coffe from '../../assets/icons/coffeBrake.png';

const GameCard = () => {
  const [selected, setSelected] = useState(false);
  const [score, setScore] = useState<string>('Unknown');
  const shortType = '';
  const diller = false;
  return (
    <GameCardContainerDiv
      onClick={() => !diller && setSelected((prev) => !prev)}
      selected={selected}
    >
      <span role="group" className="card__score up">
        <input
          maxLength={10}
          type="text"
          defaultValue={score}
          disabled={!diller}
          className="card__input-score"
          onChange={(e) => setScore(e.target.value)}
        />
        {diller ? <img src={pencil} alt="edit" className="pencil" /> : null}
      </span>
      <div className="score-type">{shortType || <img src={coffe} alt="coffe brake" />}</div>
      <img src={doneIcon} alt="selected" className="card__selected-icon" />
      <span className="card-score down">{score}</span>
    </GameCardContainerDiv>
  );
};
export default GameCard;
