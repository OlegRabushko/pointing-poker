import { Link } from 'react-router-dom';
import UserCard from '../UserCard/UserCard';
import Button from '../Button/Button';
import { StyledScramMaster } from './StyledScramMaster';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';

const ScramMaster = () => {
  return (
    <StyledScramMaster>
      <div className="text">Scram master</div>
      <UserCard dealer />
      <div className="key-text">Key to lobby:</div>
      <div className="flex-box">
        <input type="text" defaultValue="2Rt9g5f1" />
        <Button colorBG={blueColor} color={whiteColor} text="Copy" />
      </div>
      <div className="flex-box-2">
        <Button colorBG={blueColor} color={whiteColor} text="Start Game" />
        <Link to="/">
          <Button colorBG={whiteColor} color={blueColor} text="Cancel Game" />
        </Link>
      </div>
    </StyledScramMaster>
  );
};

export default ScramMaster;
