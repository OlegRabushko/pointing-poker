import { useSelector } from 'react-redux';
import { StyledSettingBlock } from './settings.styled';
import Switcher from '../Switcher/Swither';
import {
  setCardInRoundEnd,
  setCoffeeCard,
  setQuestionCard,
  setScramMasterRole,
  setTimer,
} from '../../redux/actions';
import Timer from '../Timer/Timer';
import { RootState } from '../../redux';

const SettingBlock = () => {
  const checker = useSelector((state: RootState) => state.settings);
  return (
    <StyledSettingBlock>
      <div className="text">Game settings: </div>
      <div className="flex-box">
        <div className="setting-name">Scram master as player</div>
        <Switcher checker={checker.scramMasterAsPlayer} listener={setScramMasterRole} />
      </div>
      <div className="flex-box">
        <div className="setting-name">Changing card in round end:</div>
        <Switcher checker={checker.changeCardInRoundEnd} listener={setCardInRoundEnd} />
      </div>
      <div className="flex-box">
        <div className="setting-name">Is timer needed:</div>
        <Switcher checker={checker.timerNeeded} listener={setTimer} />
      </div>
      <div className="flex-box">
        <div className="setting-name">Coffee card needed:</div>
        <Switcher checker={checker.coffeeCardNeeded} listener={setCoffeeCard} />
      </div>
      <div className="flex-box">
        <div className="setting-name">Question card needed:</div>
        <Switcher checker={checker.questionCardNeeded} listener={setQuestionCard} />
      </div>
      <div className="flex-box timer">
        <div className="setting-name">Round time:</div>
        <Timer />
      </div>
    </StyledSettingBlock>
  );
};

export default SettingBlock;
