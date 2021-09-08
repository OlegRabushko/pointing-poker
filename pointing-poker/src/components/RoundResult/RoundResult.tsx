import PlayerDecision from '../PlayerDecision/PlayerDecision';
import UserCard from '../User-card/UserCard';
import { StyledRoundResult } from './StyledRoundResult';

const RoundResult = () => {
  return (
    <StyledRoundResult>
      <div className="top-text">
        <div>Decision:</div>
        <div className="text">Players:</div>
      </div>
      {Array(5)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="flex-box">
            <PlayerDecision decision="in progress" />
            <UserCard dealer />
          </div>
        ))}
    </StyledRoundResult>
  );
};

export default RoundResult;
