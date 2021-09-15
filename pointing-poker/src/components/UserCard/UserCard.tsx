import React, { FC } from 'react';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { StyledUserCard, ImageContainer, StyledUserInfo, ExcludeBtn } from './StyledUserCard';

interface IUserCardProps {
  dealer?: boolean;
}

const UserCard: FC<IUserCardProps> = ({ dealer }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w.slice(0, 1))
      .join('');
  };

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
