import { StyledTimer } from './timer.styled';

const Timer = () => {
  return (
    <StyledTimer>
      <div>
        <div>minutes</div>
        <input value={2} type="number" />
      </div>
      <div className="points">:</div>
      <div>
        <div>seconds</div>
        <input value={30} type="number" />
      </div>
    </StyledTimer>
  );
};

export default Timer;
