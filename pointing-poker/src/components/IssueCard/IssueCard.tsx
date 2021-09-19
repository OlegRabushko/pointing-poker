import pencil from '../../assets/icons/edit_pencil.svg';
import deleteImg from '../../assets/icons/delete_basket.png';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';

const IssueCard = () => {
  const current = true;
  const game = false;
  const diller = true;
  return (
    <StyledIssueCard current={current}>
      <StyledIssueInfo>
        {current && game ? (
          <span className="current-issue">Current</span>
        ) : (
          <span className="plug"></span>
        )}
        <span className="issue-card-name">Issue 4523</span>
        <span className="issue-card-prior">low priority</span>
      </StyledIssueInfo>
      {!game && diller && (
        <div className="edit-wrapper">
          <img src={pencil} alt="edit" className="edit-img" />
          <img src={deleteImg} alt="" className="delete-img" />
        </div>
      )}
    </StyledIssueCard>
  );
};

export default IssueCard;
