import { StyledIssuesSection } from './StyledIssuesSection';
import AddIssueCard from '../IssueCard/AddIssueCard';
import IssueCard from '../IssueCard/IssueCard';

const IssuesSection = (): JSX.Element => {
  return (
    <StyledIssuesSection>
      <div className="text issue-game-page">Issues: </div>
      <div className="flex-box">
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <IssueCard />
        <AddIssueCard />
      </div>
    </StyledIssuesSection>
  );
};

export default IssuesSection;
