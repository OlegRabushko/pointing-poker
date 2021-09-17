import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import Button from '../Button/Button';
import { StyledConnectWrapper } from '../Forms/StyledConnectWrapper';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { StyledDeleteUser } from './StyledDeleteUser';

const DeleteUser = () => {
  const { firstName, lastName } = useSelector((state: RootState) => state.dataConnectForm);

  return (
    <StyledConnectWrapper>
      <StyledDeleteUser>
        <h2 className="delete-user-title">Kick player?</h2>
        <p className="delete-user-text">
          Are you really want to remove playe <span>{firstName}</span> <span>{lastName}</span> from
          game session?
        </p>
        <div className="connect-buttons-container">
          <Button text="Yes" color={whiteColor} colorBG={blueColor} onClick={() => {}} />
          <Button colorBG={whiteColor} color={blueColor} text="No" onClick={() => {}} />
        </div>
      </StyledDeleteUser>
    </StyledConnectWrapper>
  );
};

export default DeleteUser;
