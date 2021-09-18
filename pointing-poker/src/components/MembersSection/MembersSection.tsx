import { useSelector } from 'react-redux';
import { StyledMembers } from './StyledMembers';
import UserCard from '../UserCard/UserCard';
import { RootState } from '../../redux';

const MembersSection = () => {
  const { userPlayers } = useSelector((state: RootState) => state.dataConnectForm);

  const users = userPlayers.map((data) => {
    return (
      <UserCard
        key={data.userID}
        userID={data.userID}
        firstName={data.firstName}
        lastName={data.lastName}
        job={data.job}
        avatar={data.avatar}
      />
    );
  });

  return (
    <StyledMembers>
      <div className="text">Members: </div>
      <div className="flex-box">{users}</div>
    </StyledMembers>
  );
};

export default MembersSection;
