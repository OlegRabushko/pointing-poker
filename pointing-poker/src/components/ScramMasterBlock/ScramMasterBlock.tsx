import { Link } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';
import { StyledScramMasterBlock } from './StyledScramMasterBlock';

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
        <Button colorBG="#2B3A67" color="#fff" text="Copy" />
      </div>
      <div className="flex-box-2">
        <Link to="game">
          <Button colorBG="#2B3A67" color="#fff" text="Start Game" />
        </Link>
        <Link to="/">
          <Button colorBG="#fff" color="#2B3A67" text="Cancel Game" />
        </Link>
      </div>
    </StyledScramMasterBlock>
  );
};

export default ScramMasterBlock;
