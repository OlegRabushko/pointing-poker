import { useSelector } from 'react-redux';
import { StyledMembers } from './StyledMembers';
import UserCard from '../UserCard/UserCard';
import { RootState } from '../../redux';

const MembersSection = () => {
  const { isUserPlayer } = useSelector((state: RootState) => state.dataConnectForm);

  const users = isUserPlayer.map((data, idx) => {
    return (
      <UserCard
        key={idx}
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
