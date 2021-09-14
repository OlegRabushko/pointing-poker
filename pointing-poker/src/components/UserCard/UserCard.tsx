import React, { FC } from 'react';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { getInitials, ImageContainer } from '../Avatar/StyledAvatar';
import { StyledUserCard, StyledUserInfo, ExcludeBtn } from './StyledUserCard';

interface IUserCardProps {
  dealer?: boolean;
}

const UserCard: FC<IUserCardProps> = ({ dealer }) => {
  return (
    <StyledUserCard className="user-card">
      <ImageContainer className="img-container">
        <p className="initials">{getInitials('James Blake')}</p>
      </ImageContainer>
      <StyledUserInfo>
        <span className="card-user-name">James Blake</span>
        <span className="card-user-position">Software Engenier</span>
      </StyledUserInfo>
      {!dealer && (
        <ExcludeBtn>
          <img src={cancelImg} alt="exclude button" />
        </ExcludeBtn>
      )}
    </StyledUserCard>
  );
};

export default UserCard;
