/* eslint-disable array-callback-return */
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setUpdatedPlayersState, showDeleteForm } from '../../redux/FormRedux/FormActions';
import Button from '../Button/Button';
import { StyledConnectWrapper } from '../Forms/StyledFormComponents';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { IDeleteUserProps } from './DeleteUserTypes';
import { StyledDeleteUser } from './StyledDeleteUser';

const DeleteUser: FC<IDeleteUserProps> = (props) => {
  const { firstName, lastName, id } = props;

  const dispatch = useDispatch();
  const { isDeleteUser } = useSelector((state: RootState) => state.showForms);

  return (
    <StyledConnectWrapper onMouseDown={() => dispatch(showDeleteForm(!isDeleteUser))}>
      <StyledDeleteUser onMouseDown={(e: React.MouseEvent) => e.stopPropagation()}>
        <h2 className="delete-user-title">Kick player?</h2>
        <p className="delete-user-text">
          Are you really want to remove playe <span>{firstName}</span> <span>{lastName}</span> from
          game session?
        </p>
        <div className="connect-buttons-container">
          <Button
            text="Yes"
            color={whiteColor}
            colorBG={blueColor}
            onClick={() => dispatch(setUpdatedPlayersState(id))}
          />
          <Button
            colorBG={whiteColor}
            color={blueColor}
            text="No"
            onClick={() => dispatch(showDeleteForm(!isDeleteUser))}
          />
        </div>
      </StyledDeleteUser>
    </StyledConnectWrapper>
  );
};

export default DeleteUser;
