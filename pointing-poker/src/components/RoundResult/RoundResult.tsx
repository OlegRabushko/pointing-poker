import { FC } from 'react';
import PlayerDecision from '../PlayerDecision/PlayerDecision';
import UserCard from '../UserCard/UserCard';
import { StyledRoundResult } from './StyledRoundResult';
import plusIco from '../../assets/icons/cancel-ico.svg';

interface IRoundResultProps {
  setShowResults?: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoundResult: FC<IRoundResultProps> = ({ setShowResults }) => {
  return (
    <StyledRoundResult>
      <div className="full-container">
        <div className="top-text">
          <div>Decision:</div>
          <div className="text">Players:</div>
          <img onClick={() => setShowResults!(false)} src={plusIco} alt="close-ico" />
        </div>
        <div className="container">
          {Array(15)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex-box">
                <PlayerDecision decision="in progress" />
                <UserCard />
              </div>
            ))}
        </div>
      </div>
    </StyledRoundResult>
  );
};

export default RoundResult;
