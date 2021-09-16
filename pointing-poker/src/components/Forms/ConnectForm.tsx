/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  setAvatar,
  setConnectFormJob,
  setConnectFormName,
  setConnectFormSurname,
  setObserver,
  showConnectForm,
} from '../../redux/FormRedux/FormActions';
import Button from '../Button/Button';
import Switcher from '../Switcher/Switcher';
import { IConnectForm } from './FormTypes';
import { StyledInput } from './StyledInput';
import { StyledLabel } from './StyledLabel';
import { StyledConnectForm } from './StyledForm';
import { StyledPopupWrapper } from './StyledPopupWrapper';
import { RootState } from '../../redux/index';
import { getInitials, ImageContainer } from '../Avatar/StyledAvatar';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { setDillerStatus, setPlayerStatus } from '../../redux/RolesRedux/RolesActions';

const ConnectForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IConnectForm>({ mode: 'onChange' });

  const dispatch = useDispatch();
  const { isConnectForm } = useSelector((state: RootState) => state.showForms);
  const { isDiller } = useSelector((state: RootState) => state.personStatus);
  const { avatar, role, firstName, lastName } = useSelector(
    (state: RootState) => state.dataConnectForm,
  );
  const history = useHistory();

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

  const onSubmit: SubmitHandler<IConnectForm> = (data) => {
    dispatch(showConnectForm(!isConnectForm));
    dispatch(setConnectFormName(data.firstName));
    dispatch(setConnectFormSurname(data.lastName));
    dispatch(setConnectFormJob(data.job));
    reset();
    history.push('/settings');
  };

  const onShowConnectForm = () => {
    dispatch(showConnectForm(!isConnectForm));
    dispatch(setDillerStatus(false));
    dispatch(setPlayerStatus(false));
  };

  return (
    <StyledPopupWrapper onMouseDown={onShowConnectForm}>
      <StyledConnectForm
        onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="legend-wrapper">
          <legend>Connect to lobby</legend>
          {!isDiller && (
            <div className="switcher-wrapper">
              <p>Connect as observer</p>
              <Switcher checked={role} listener={setObserver} />
            </div>
          )}
        </div>
        <div className="connect-form-wrapper">
          <StyledLabel>
            Your first name:
            <StyledInput {...register('firstName', { required: true, maxLength: 10 })} />
            {errors.firstName && <p className="error">First name is required</p>}
          </StyledLabel>
          <StyledLabel>
            Your last name:
            <StyledInput {...register('lastName', { required: true, maxLength: 10 })} />
            {errors.firstName && <p className="error">Last name is required</p>}
          </StyledLabel>
          <StyledLabel>
            Your job position:
            <StyledInput {...register('job')} />
          </StyledLabel>
          <div className="input-file-wrapper">
            <label className="upload-label">
              <span>Choose avatar</span>
              <input type="file" className="upload-input" onChange={addAvatar} />
            </label>
            <Button
              borderRadius="0 5px 5px 0"
              colorBG={blueColor}
              color={whiteColor}
              text="Load File"
            />
          </div>
          <ImageContainer background={`url(${avatar})`} width="83px" height="83px">
            {!avatar && <p className="initials">{getInitials(`${firstName} ${lastName}`)}</p>}
          </ImageContainer>
        </div>
        <div className="connect-buttons-container">
          <Button
            mainPage
            text="Confirm"
            color={whiteColor}
            colorBG={blueColor}
            onClick={() => onSubmit}
          />
          <Button
            mainPage
            colorBG={whiteColor}
            color={blueColor}
            text="Cancel"
            onClick={onShowConnectForm}
          />
        </div>
      </StyledConnectForm>
    </StyledPopupWrapper>
  );
};

export default ConnectForm;
