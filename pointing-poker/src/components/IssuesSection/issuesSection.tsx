import { useSelector } from 'react-redux';
import { StyledIssuesSection } from './StyledIssuesSection';
import AddIssueCard from '../IssueCard/AddIssueCard';
import IssueCard from '../IssueCard/IssueCard';
import { RootState } from '../../redux';

const IssuesSection = () => {
  const { issues } = useSelector((state: RootState) => state.issues);

  const createIssueCards = Object.keys(issues).map((issueId: string) => {
    return (
      <IssueCard
        key={issues[issueId]._id}
        isCurrent={issues[issueId].isCurrent}
        title={issues[issueId].title}
        priority={issues[issueId].priority}
        issueId={issues[issueId]._id}
        isCompleted={issues[issueId].isCompleted}
        results={issues[issueId].results}
      />
    );
  });

  return (
    <StyledIssuesSection>
      <div className="text issue-game-page">Issues:</div>
      <div className="issue-cards-section">
        {createIssueCards}
        <AddIssueCard />
      </div>
    </StyledIssuesSection>
  );
};

export default IssuesSection;
