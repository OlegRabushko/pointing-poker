/* eslint-disable array-callback-return */
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setUpdatedPlayersState } from '../../redux/FormRedux/FormActions';
import Button from '../Button/Button';
import { StyledConnectWrapper } from '../Forms/StyledFormComponents';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { IDeleteUserProps } from './DeleteUserTypes';
import { StyledDeleteUser } from './StyledDeleteUser';

const DeleteUser: FC<IDeleteUserProps> = (props) => {
  const { firstName, lastName, id, setOpenForm } = props;

  const dispatch = useDispatch();

  const deleteUser = () => {
    setOpenForm(false);
    dispatch(setUpdatedPlayersState(id));
  };
  const cancelDeletion = () => setOpenForm(false);

  return (
    <StyledConnectWrapper onMouseDown={() => setOpenForm(false)}>
      <StyledDeleteUser onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}>
        <h2 className="delete-user-title">Kick player?</h2>
        <p className="delete-user-text">
          Are you really want to remove player<span>{firstName}</span> <span>{lastName}</span> from
          game session?
        </p>
        <div className="connect-buttons-container">
          <Button text="Yes" color={whiteColor} colorBG={blueColor} onClick={deleteUser} />
          <Button colorBG={whiteColor} color={blueColor} text="No" onClick={cancelDeletion} />
        </div>
      </StyledDeleteUser>
    </StyledConnectWrapper>
  );
};

export default DeleteUser;
