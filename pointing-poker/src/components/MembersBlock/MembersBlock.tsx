import { StyledMembers } from './StyledMembers';
import UserCard from '../UserCard/UserCard';

const MembersBlock = () => {
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

export default MembersBlock;
