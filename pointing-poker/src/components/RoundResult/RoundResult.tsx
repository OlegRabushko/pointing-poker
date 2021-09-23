import { FC } from 'react';
import { useSelector } from 'react-redux';
import PlayerDecision from '../PlayerDecision/PlayerDecision';
import UserCard from '../UserCard/UserCard';
import { StyledRoundResult } from './StyledRoundResult';
import plusIco from '../../assets/icons/cancel-ico.svg';
import { RootState } from '../../redux';

interface IRoundResultProps {
  setShowResults?: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoundResult: FC<IRoundResultProps> = ({ setShowResults }) => {
  const players = useSelector((store: RootState) => store.dataConnectForm.userPlayers);

  return (
    <StyledRoundResult>
      <div className="full-container">
        <div className="top-text">
          <div>Decision:</div>
          <div className="text">Players:</div>
          <img onClick={() => setShowResults!(false)} src={plusIco} alt="close-ico" />
        </div>
        <div className="container">
          {players.map((el, i) => (
            <div key={i} className="flex-box">
              <PlayerDecision decision="in progress" />
              <UserCard
                userID={el.userID}
                firstName={el.firstName}
                lastName={el.lastName}
                job={el.job}
                avatar={el.avatar}
                session={el.session}
              />
            </div>
          ))}
        </div>
      </div>
    </StyledRoundResult>
  );
};

export default RoundResult;
