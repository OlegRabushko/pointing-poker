import { StyledIssuesBlock } from './issues.styled';
import IssueCard from '../Issue-card/Issue-card';
import AddIssueCard from '../Issue-card/Add-issue-card';

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
