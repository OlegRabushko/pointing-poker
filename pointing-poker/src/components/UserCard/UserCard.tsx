import React, { FC } from 'react';
import cancelImg from '../../assets/icons/Vector-cancel.png';
import { Exclude, ImageContainer, StyledUserCard, StyledUserInfo } from './user-card.styled';

interface IUserCardProps {
  dealer: boolean;
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
      <ImageContainer>
        <p className="initials">{getInitials('James Blake')}</p>
      </ImageContainer>
      <StyledUserInfo>
        <span className="card__user-name">James Blake</span>
        <span className="card__user-position">Software Engenier</span>
      </StyledUserInfo>
      {!dealer && (
        <Exclude>
          <img src={cancelImg} alt="exclude button" />
        </Exclude>
      )}
    </StyledUserCard>
  );
};

export default UserCard;
