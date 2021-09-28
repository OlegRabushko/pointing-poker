import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { RootState } from '../../redux';
import { getInitials, ImageContainer } from '../Avatar/StyledAvatar';
import DeleteUser from '../DeletePlayer/DeleteUser';
import { IConnectForm } from '../Forms/FormTypes';
import { StyledUserCard, StyledUserInfo, ExcludeBtn } from './StyledUserCard';

const UserCard: FC<IConnectForm> = (props) => {
  const { firstName, lastName, job, avatar, userID, dialer } = props;

  const [openForm, setOpenForm] = useState(false);
  const { isDialer } = useSelector((state: RootState) => state.personStatus);

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
        {isDialer && !dialer && (
          <ExcludeBtn>
            <img src={cancelImg} onClick={() => setOpenForm(true)} alt="exclude button" />
          </ExcludeBtn>
        )}
        {openForm && (
          <DeleteUser
            setOpenForm={setOpenForm}
            firstName={firstName}
            lastName={lastName}
            id={userID}
          />
        )}
      </StyledUserCard>
    </>
  );
};

export default UserCard;
