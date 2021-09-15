import { Link } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';
import { StyledScramMasterBlock } from './StyledScramMasterBlock';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';

export const ScramMaster = () => (
  <StyledScramMasterBlock>
    <div className="text">Scram master</div>
    <UserCard dealer />
  </StyledScramMasterBlock>
);

const ScramMasterBlock = () => {
  return (
    <StyledScramMasterBlock>
      <ScramMaster />
      <div className="key-text">Key to lobby:</div>
      <div className="flex-box">
        <input type="text" defaultValue="2Rt9g5f1" />
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
    </StyledScramMasterBlock>
  );
};

export default ScramMasterBlock;
