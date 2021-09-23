import { useSelector } from 'react-redux';
import { StyledIssuesSection } from './StyledIssuesSection';
import AddIssueCard from '../IssueCard/AddIssueCard';
import IssueCard from '../IssueCard/IssueCard';
import { RootState } from '../../redux';

const IssuesSection = (): JSX.Element => {
  const { issueCards } = useSelector((state: RootState) => state.issueFormData);

  const createIssueCards = issueCards.map((card) => {
    return (
      <IssueCard
        key={card.issueID}
        current={card.current}
        issueTitle={card.issueTitle}
        issuePriority={card.issuePriority}
        issueID={card.issueID}
      />
    );
  });

  return (
    <StyledIssuesSection>
      <div className="text issue-game-page">Issues: </div>
      <div className="issue-cards-section">
        {createIssueCards}
        <AddIssueCard />
      </div>
    </StyledIssuesSection>
  );
};

export default IssuesSection;
