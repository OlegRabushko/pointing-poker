import { FC } from 'react';
import { useSelector } from 'react-redux';
import PlayerDecision from '../PlayerDecision/PlayerDecision';
import { StyledRoundResult } from './StyledRoundResult';
import { RootState } from '../../redux';
import UserCardMini from '../UserCardMini/UserCardMini';
import selectedIco from '../../assets/icons/selected.png';
import { IUserInfo } from '../../types/interfaces';

interface IRoundResultProps {
  setShowResults?: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoundResult: FC<IRoundResultProps> = ({ setShowResults }) => {
  const playerIsDealer = useSelector((store: RootState) => store.settings.scramMasterAsPlayer);
  const dealerID = useSelector((store: RootState) => store.initial.dealerId);
  const users = useSelector((store: RootState) => store.initial.users);
  const userIsSelectedCard = useSelector((store: RootState) => store.card.userSelectedCard);
  const allUsers = Object.entries(users);

  const UserResultCard: FC<{ el: [string, IUserInfo]; i: number }> = ({ el, i }) => (
    <div key={i} className="flex-box">
      {userIsSelectedCard[el[1]._id] && <img src={selectedIco} alt="ico" />}
      {!userIsSelectedCard[el[1]._id] && <PlayerDecision decision="in progress" />}
      <UserCardMini
        id={el[1]._id}
        firstName={el[1].name}
        lastName={el[1].lastName}
        avatar={el[1].avatar}
      />
    </div>
  );

  return (
    <StyledRoundResult>
      <div className="full-container">
        <div className="top-text">
          <div>Decision:</div>
          <div className="text">Players:</div>
          <button onClick={() => setShowResults!(false)} />
        </div>
        <div className="container">
          {allUsers.map((el, i) => {
            if (playerIsDealer) return <UserResultCard el={el} i={i} />;
            if (!playerIsDealer)
              return <>{el[0] !== dealerID && <UserResultCard el={el} i={i} />}</>;

            return el;
          })}
        </div>
      </div>
    </StyledRoundResult>
  );
};

export default RoundResult;
