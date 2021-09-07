import React from 'react';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { Exclude, ImageContainer, StyledUserCard, StyledUserInfo } from './user-card.styled';

const UserCard = () => {
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w.slice(0, 1))
      .join('');
  };

  return (
    <StyledUserCard className="user-card">
      <ImageContainer>
        <p className="initials">{getUserInitials('James Blake')}</p>
      </ImageContainer>
      <StyledUserInfo>
        <span className="card-user-name">James Blake</span>
        <span className="card-user-position">Software Engenier</span>
      </StyledUserInfo>
      <Exclude>
        <img src={cancelImg} alt="exclude" />
      </Exclude>
    </StyledUserCard>
  );
};

export default UserCard;
