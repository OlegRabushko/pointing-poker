import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { StyledScramMasterSection } from './StyledScramMasterSection';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import ScramMaster from '../ScramMaster/ScramMaster';

const ScramMasterSection = () => {
  return (
    <StyledScramMasterSection>
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
    </StyledScramMasterSection>
  );
};

export default ScramMasterSection;
