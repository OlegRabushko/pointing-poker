import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSwitcher } from './StyledSwitcher';

export interface ISwitcherProps {
  listener?: (role: boolean) => {
    type: string;
    payload: boolean;
  };
  checked?: boolean;
}

const Switcher: FC<ISwitcherProps> = ({ listener, checked }) => {
  const dispatch = useDispatch();

  return (
    <StyleSwitcher checked={checked}>
      <label>
        <input type="checkbox" onClick={() => dispatch(listener(!checked))} />
        <span></span>
      </label>
    </StyleSwitcher>
  );
};

export default Switcher;
