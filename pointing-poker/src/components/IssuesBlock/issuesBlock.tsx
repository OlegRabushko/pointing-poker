import { StyledIssuesBlock } from './StyledIssuesBlock';
import IssueCard from '../Issue-card/IssueCard';
import AddIssueCard from '../Issue-card/AddIssueCard';

const IssuesBlock = () => {
  return (
    <StyledIssuesBlock>
      <div className="text">Issues: </div>
      <div className="flex-box">
        <IssueCard />
        <AddIssueCard />
      </div>
    </StyledIssuesBlock>
  );
};

export default IssuesBlock;
