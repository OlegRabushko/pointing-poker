import React from 'react';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { ExcludeBtn, ImageContainer, UserCardContainer, UserInfoDiv } from './UserCard.style';

const UserCard = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w.slice(0, 1))
      .join('');
  };

  return (
    <UserCardContainer className="user-card">
      <ImageContainer>
        <p className="initials">{getInitials('James Blake')}</p>
      </ImageContainer>
      <UserInfoDiv>
        <span className="card__user-name">James Blake</span>
        <span className="card__user-position">Software Engenier</span>
      </UserInfoDiv>
      <ExcludeBtn>
        <img src={cancelImg} alt="exclude button" />
      </ExcludeBtn>
    </UserCardContainer>
  );
};

export default UserCard;
