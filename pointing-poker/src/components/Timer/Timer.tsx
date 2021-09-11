import { StyledTimer } from './StyledTimer';

const Timer = () => {
  return (
    <StyledTimer>
      <div>
        <div>minutes</div>
        <input defaultValue={2} type="number" />
      </div>
      <div className="points">:</div>
      <div>
        <div>seconds</div>
        <input defaultValue={30} type="number" />
      </div>
    </StyledTimer>
  );
};

export default Timer;
