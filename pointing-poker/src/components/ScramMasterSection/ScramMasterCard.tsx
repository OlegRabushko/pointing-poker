import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import UserCard from '../UserCard/UserCard';

const ScramMasterCard = () => {
  const { userDealer } = useSelector((state: RootState) => state.dataConnectForm);
  const { userID, lastName, firstName, job, avatar } = userDealer;

  return (
    <UserCard
      userID={userID}
      lastName={lastName}
      firstName={firstName}
      job={job}
      avatar={avatar}
      dialer
    />
  );
};

export default ScramMasterCard;
