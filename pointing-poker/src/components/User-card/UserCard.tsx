import React, { FC } from 'react';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { ExcludeBtn, ImageContainer, StyledUserCard, UserInfoDiv } from './StyledUserCard';

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
      <UserInfoDiv>
        <span className="card__user-name">James Blake</span>
        <span className="card__user-position">Software Engenier</span>
      </UserInfoDiv>
      {!dealer && (
        <ExcludeBtn>
          <img src={cancelImg} alt="exclude button" />
        </ExcludeBtn>
      )}
    </StyledUserCard>
  );
};

export default UserCard;
