import AddIssueCard from '../IssueCard/AddIssueCard';
import IssueCard from '../IssueCard/IssueCard';
import { StyledIssuesBlock } from './issues.styled';

const IssuesBlock = () => {
  return (
    <StyledIssuesBlock>
      <div className="text">Issues: </div>
      <div className="flex-box">
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <AddIssueCard />
      </div>
    </StyledIssuesBlock>
  );
};

export default IssuesBlock;
