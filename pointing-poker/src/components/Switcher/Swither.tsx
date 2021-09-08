import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSwitcher } from './StyledSwitcher';

export interface ISwitcherProps {
  listener: (role: boolean) => {
    type: string;
    payload: boolean;
  };
  checker: boolean;
}

const Switcher: FC<ISwitcherProps> = ({ listener, checker }) => {
  const dispatch = useDispatch();

  return (
    <StyleSwitcher checked={checker}>
      <label>
        <input type="checkbox" onClick={() => dispatch(listener(!checker))} />
        <span></span>
      </label>
    </StyleSwitcher>
  );
};

export default Switcher;
