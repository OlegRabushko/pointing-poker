import { FC } from 'react';
import { StyledPlayerDecision } from './StyledPlayerDecision';

interface IPlayerDecisionProps {
  decision: string;
}

const PlayerDecision: FC<IPlayerDecisionProps> = ({ decision }) => {
  return (
    <StyledPlayerDecision>
      <div>{decision}</div>
    </StyledPlayerDecision>
  );
};

export default PlayerDecision;
