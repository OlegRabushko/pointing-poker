import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { setDilerId } from '../../redux/InitialRedux/InitialActions';
import { IUsers } from '../../types/interfaces';
import UserCard from '../UserCard/UserCard';

const ScramMasterCard = () => {
  // const { userDealer } = useSelector((state: RootState) => state.dataConnectForm);
  // const { userID, lastName, firstName, job, avatar } = userDealer;
  const dispatch = useDispatch();
  const users: IUsers = useSelector((state: RootState): IUsers => state.initial.users);
  const dilerId = Object.keys(users)
    .filter((userId: string) => users[userId].isDialer)
    .join();

  useEffect(() => {
    dispatch(setDilerId(dilerId));
  }, [dilerId]);

  return dilerId ? (
    <UserCard
      userID={users[dilerId]._id}
      lastName={users[dilerId].lastName}
      firstName={users[dilerId].name}
      job={users[dilerId].job}
      avatar={users[dilerId].avatar}
      dialer
    />
  ) : null;
};
export default ScramMasterCard;
