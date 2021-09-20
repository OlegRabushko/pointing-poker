import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { RootState } from '../../redux';
import { showDeleteForm } from '../../redux/FormRedux/FormActions';
import { IConnectFormData } from '../../redux/FormRedux/ReduxFormTypes';
import { getInitials, ImageContainer } from '../Avatar/StyledAvatar';
import DeleteUser from '../DeletePlayer/DeleteUser';
import { StyledUserCard, StyledUserInfo, ExcludeBtn } from './StyledUserCard';

const UserCard: FC<IConnectFormData> = (props) => {
  const { firstName, lastName, job, avatar, userID } = props;

  const dispatch = useDispatch();
  const { isDialer } = useSelector((state: RootState) => state.personStatus);
  const { isDeleteUser } = useSelector((state: RootState) => state.showForms);

  return (
    <>
      <StyledUserCard className="user-card">
        <ImageContainer background={`url(${avatar})`} className="img-container">
          {avatar === '' && <p className="initials">{getInitials(`${firstName} ${lastName}`)}</p>}
        </ImageContainer>
        <StyledUserInfo>
          <span className="card-user-name">
            {firstName} {lastName}
          </span>
          <span className="card-user-position">{job}</span>
        </StyledUserInfo>
        {isDialer && (
          <ExcludeBtn onClick={() => dispatch(showDeleteForm(!isDeleteUser))}>
            <img src={cancelImg} alt="exclude button" />
          </ExcludeBtn>
        )}
      </StyledUserCard>
      {isDeleteUser && <DeleteUser firstName={firstName} lastName={lastName} id={userID} />}
    </>
  );
};

export default UserCard;
