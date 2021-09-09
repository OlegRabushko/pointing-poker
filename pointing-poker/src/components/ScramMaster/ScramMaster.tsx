import { Link } from 'react-router-dom';
import UserCard from '../User-card/UserCard';
import Button from '../Button/Button';
import { StyledScramMaster } from './StyledScramMaster';

const ScramMaster = () => {
  return (
    <StyledScramMaster>
      <div className="text">Scram master</div>
      <UserCard dealer />
      <div className="key-text">Key to lobby:</div>
      <div className="flex-box">
        <input type="text" defaultValue="2Rt9g5f1" />
        <Button colorBG="#2B3A67" color="#fff" text="Copy" />
      </div>
      <div className="flex-box-2">
        <Button colorBG="#2B3A67" color="#fff" text="Start Game" />
        <Link to="/">
          <Button colorBG="#fff" color="#2B3A67" text="Cancel Game" />
        </Link>
      </div>
    </StyledScramMaster>
  );
};

export default ScramMaster;
