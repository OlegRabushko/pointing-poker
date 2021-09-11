import { FC } from 'react';
import PlayerDecision from '../PlayerDecision/PlayerDecision';
import UserCard from '../UserCard/UserCard';
import { StyledRoundResult } from './StyledRoundResult';
import plusIco from '../../assets/icons/cancel-ico.svg';

interface IRoundResultProps {
  setOpenResults?: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoundResult: FC<IRoundResultProps> = ({ setOpenResults }) => {
  return (
    <StyledRoundResult>
      <div className="full-container">
        <div className="top-text">
          <div>Decision:</div>
          <div className="text">Players:</div>
          <img onClick={() => setOpenResults!(false)} src={plusIco} alt="" />
        </div>
        <div className="container">
          {Array(15)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex-box">
                <PlayerDecision decision="in progress" />
                <UserCard dealer />
              </div>
            ))}
        </div>
      </div>
    </StyledRoundResult>
  );
};

export default RoundResult;
