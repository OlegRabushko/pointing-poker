import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { RootState } from '../../redux';
import { getInitials, ImageContainer } from '../Avatar/StyledAvatar';
import { StyledUserCard, StyledUserInfo, ExcludeBtn } from './StyledUserCard';
import { IUserCardProps } from './TypesUserCard';

const UserCard: FC<IUserCardProps> = (props) => {
  const { firstName, lastName, job, avatar } = props;

  const isDialer = useSelector((state: RootState) => state.personStatus);

  return (
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
      {!isDialer && (
        <ExcludeBtn>
          <img src={cancelImg} alt="exclude button" />
        </ExcludeBtn>
      )}
    </StyledUserCard>
  );
};

export default UserCard;
