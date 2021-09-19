import { StyledMembers } from './StyledMembers';
import UserCard from '../UserCard/UserCard';

const MembersSection = () => {
  return (
    <StyledMembers>
      <div className="text">Members: </div>
      <div className="flex-box">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </StyledMembers>
  );
};

export default MembersSection;
