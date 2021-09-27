/* eslint-disable no-else-return */
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
  const playerIsDealer = useSelector((store: RootState) => store.settings.scramMasterAsPlayer);
  const { userPlayers, userDealer } = useSelector((store: RootState) => store.dataConnectForm);

  return (
    <StyledRoundResult>
      <div className="full-container">
        <div className="top-text">
          <div>Decision:</div>
          <div className="text">Players:</div>
          <img onClick={() => setShowResults!(false)} src={plusIco} alt="close-ico" />
        </div>
        <div className="container">
          {playerIsDealer && (
            <div className="flex-box">
              <PlayerDecision decision="in progress" />
              <UserCard
                userID={userDealer.userID}
                firstName={userDealer.firstName}
                lastName={userDealer.lastName}
                job={userDealer.job}
                avatar={userDealer.avatar}
                session={userDealer.session}
                dialer
              />
            </div>
          )}
          {userPlayers.map((el, i) => (
            <div key={i} className="flex-box">
              <PlayerDecision decision="in progress" />
              <UserCard
                userID={el.userID}
                firstName={el.firstName}
                lastName={el.lastName}
                job={el.job}
                avatar={el.avatar}
                session={el.session}
                dialer
              />
            </div>
          ))}
        </div>
      </div>
    </StyledRoundResult>
  );
};

export default RoundResult;
