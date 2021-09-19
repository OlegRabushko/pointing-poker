import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import { StyledScramMasterSection } from './StyledScramMasterSection';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { RootState } from '../../redux';
import UserCard from '../UserCard/UserCard';

const ScramMasterSection = () => {
  const { userDealers } = useSelector((state: RootState) => state.dataConnectForm);

  const userDealerData = userDealers.map((data) => {
    return (
      <UserCard
        key={data.userID}
        userID={data.userID}
        firstName={data.firstName}
        lastName={data.lastName}
        job={data.job}
        avatar={data.avatar}
      />
    );
  });

  return (
    <StyledScramMasterSection>
      <div className="text">Scram master</div>
      {userDealerData}
      <div className="key-text">Key to lobby:</div>
      <div className="flex-box">
        <input className="scram-master-input" type="text" defaultValue="2Rt9g5f1" />
        <Button colorBG={blueColor} color={whiteColor} text="Copy" />
      </div>
      <div className="flex-box-2">
        <Link to="/game-dealer">
          <Button colorBG={blueColor} color={whiteColor} text="Start Game" />
        </Link>
        <Link to="/">
          <Button colorBG={whiteColor} color={blueColor} text="Cancel Game" />
        </Link>
      </div>
    </StyledScramMasterSection>
  );
};

export default ScramMasterSection;
