import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import {
  setAvatar,
  setConnectFormName,
  setConnectFormRole,
  setConnectFormSurname,
  setObserver,
  showConnectForm,
} from '../../redux/actions';
import Button from '../Button/Button';
import Switcher from '../Switcher/Switcher';
import { ImageContainer } from '../User-card/StyledUserCard';
import { StyledConnectForm } from './StyledConnectForm';
import { StyledConnectWrapper } from './StyledConnectWrapper';

const ConnectPopup = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w.slice(0, 1))
      .join('');
  };

  const dispatch = useDispatch();
  const connectStateObserver = useSelector(
    (state: RootState) => state.connectCheckbox.checkObserver,
  );
  const { connectFormName, connectFormSurname, connectFormRole, avatar } = useSelector(
    (state: RootState) => state.dataConnectForm,
  );
  const { isConnectForm } = useSelector((state: RootState) => state.dataConnectForm);

  const onSetConnectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setConnectFormName(value));
  };

  const onSetConnectSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setConnectFormSurname(value));
  };

  const onSetConnectRole = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setConnectFormRole(value));
  };

  const addAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const src = await new Promise((resolve) => {
      const file: Blob = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result);
          dispatch(setAvatar(reader.result as string));
        };
      }
    });
    return src;
  };

  return (
    <StyledConnectWrapper>
      <StyledConnectForm>
        <div className="legend-wrapper">
          <legend>Connect to lobby</legend>
          <div className="switcher-wrapper">
            <p>Connect as observer</p>
            <Switcher checked={connectStateObserver} listener={setObserver} />
          </div>
        </div>
        <div className="connect-form-wrapper">
          <label className="connect-label">
            Your first name:
            <input className="connect-input" value={connectFormName} onChange={onSetConnectName} />
          </label>
          <label className="connect-label">
            Your last name:
            <input
              className="connect-input"
              value={connectFormSurname}
              onChange={onSetConnectSurname}
            />
          </label>
          <label className="connect-label">
            Your job position:
            <input className="connect-input" value={connectFormRole} onChange={onSetConnectRole} />
          </label>
          <div className="input-file-wrapper">
            <label className="upload-label">
              <span>Choose avatar</span>
              <input type="file" className="upload-input" onChange={addAvatar} />
            </label>
            <Button borderRadius="0 5px 5px 0" colorBG="#2b3a67" color="#fff" text="Load File" />
          </div>
          <ImageContainer background={`url(${avatar})`}>
            {!avatar && <p className="initials">{getInitials('James Blake')}</p>}
          </ImageContainer>
        </div>
        <div className="connect-buttons-container">
          <BrowserRouter>
            <Link to="/settings">
              <Button
                mainPage
                text="Confirm"
                color="#fff"
                colorBG="#2B3A67"
                onClick={() => dispatch(showConnectForm(!isConnectForm))}
              />
            </Link>
          </BrowserRouter>
          <Button
            mainPage
            colorBG="#fff"
            color="#2B3A67"
            text="Cancel"
            onClick={() => dispatch(showConnectForm(!isConnectForm))}
          />
        </div>
      </StyledConnectForm>
    </StyledConnectWrapper>
  );
};

export default ConnectPopup;
