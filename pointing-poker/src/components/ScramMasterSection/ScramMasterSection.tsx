import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button';
import { StyledScramMasterSection } from './StyledScramMasterSection';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { RootState } from '../../redux';
import { setStartTime } from '../../redux/TimerRedux/TimerActions';
import ScramMasterCard from './ScramMasterCard';

const ScramMasterSection = () => {
  const dispatch = useDispatch();
  const timeStore = useSelector((store: RootState) => store.timer);
  const isDialer = useSelector((store: RootState) => store.personStatus.isDialer);
  const startGame = () => {
    dispatch(setStartTime([timeStore.minutes, timeStore.seconds]));
  };

  return (
    <StyledScramMasterSection>
      <div className="text">Scram master</div>
      <ScramMasterCard />
      {!isDialer && <div className="empty" />}
      <>
        {isDialer && (
          <>
            <div className="key-text">Key to lobby:</div>
            <div className="flex-box">
              <input className="scram-master-input" type="text" defaultValue="2Rt9g5f1" />
              <Button colorBG={blueColor} color={whiteColor} text="Copy" />
            </div>
          </>
        )}

        <div className="flex-box-2">
          {isDialer && (
            <Link to="/game">
              <Button
                onClick={startGame}
                colorBG={blueColor}
                color={whiteColor}
                text="Start Game"
              />
            </Link>
          )}
          <Link to="/">
            <Button
              colorBG={whiteColor}
              color={blueColor}
              text={isDialer ? 'Cancel Game' : 'Exit'}
            />
          </Link>
        </div>
      </>
    </StyledScramMasterSection>
  );
};

export default ScramMasterSection;
