import { StyledMembers } from './StyledMembers';
import UserCard from '../UserCard/UserCard';

const MembersBlock = () => {
  return (
    <StyledMembers>
      <div className="text">Members: </div>
      <div className="flex-box">
        <UserCard dealer={false} />
        <UserCard dealer={false} />
        <UserCard dealer={false} />
        <UserCard dealer={false} />
        <UserCard dealer={false} />
      </div>
    </StyledMembers>
  );
};

export default MembersBlock;
