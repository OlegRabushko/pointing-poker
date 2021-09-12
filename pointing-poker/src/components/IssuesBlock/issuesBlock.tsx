import { StyledIssuesBlock } from './StyledIssuesBlock';
import AddIssueCard from '../IssueCard/AddIssueCard';
import IssueCard from '../IssueCard/IssueCard';

const IssuesBlock = (): JSX.Element => {
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
