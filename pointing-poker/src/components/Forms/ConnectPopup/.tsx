/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../../redux';

import {
  setAvatar,
  setConnectFormJob,
  setConnectFormName,
  setConnectFormSurname,
  setObserver,
  showConnectForm,
} from '../../../redux/ReduxConnectForm/actions';
import Button from '../../Button/Button';
import Switcher from '../../Switcher/Switcher';
import { IConnectForm } from '../FormTypes';
import { StyledInput } from './StyledInput';
import { StyledLabel } from './StyledLabel';
import { StyledConnectForm } from './StyledConnectForm';
import { StyledConnectWrapper } from './StyledConnectWrapper';
import { ImageContainer } from '../../UserCard/StyledUserCard';

const ConnectPopup = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w.slice(0, 1))
      .join('');
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IConnectForm>({ mode: 'onChange' });

  const dispatch = useDispatch();
  const { avatar, isConnectForm, role } = useSelector((state: RootState) => state.dataConnectForm);
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
  };

  return (
    <StyledConnectWrapper onMouseDown={onShowConnectForm}>
      <StyledConnectForm
        onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="legend-wrapper">
          <legend>Connect to lobby</legend>
          <div className="switcher-wrapper">
            <p>Connect as observer</p>
            <Switcher checked={role} listener={setObserver} />
          </div>
        </div>
        <div className="connect-form-wrapper">
          <StyledLabel>
            Your first name:
            <StyledInput {...register('firstName', { required: true, maxLength: 10 })} />
          </StyledLabel>
          {errors.firstName && <p className="error">First name is required</p>}
          <StyledLabel>
            Your last name:
            <StyledInput {...register('lastName')} />
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
            <Button borderRadius="0 5px 5px 0" colorBG="#2b3a67" color="#fff" text="Load File" />
          </div>
          <ImageContainer background={`url(${avatar})`} width="83px" height="83px">
            {!avatar && <p className="initials">{getInitials('James Blake')}</p>}
          </ImageContainer>
        </div>
        <div className="connect-buttons-container">
          <Button
            type="submit"
            mainPage
            text="Confirm"
            color="#fff"
            colorBG="#2B3A67"
            onClick={() => onSubmit}
          />
          <Button
            mainPage
            colorBG="#fff"
            color="#2B3A67"
            text="Cancel"
            onClick={onShowConnectForm}
          />
        </div>
      </StyledConnectForm>
    </StyledConnectWrapper>
  );
};

export default ConnectPopup;
