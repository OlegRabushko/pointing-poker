import { StyledIssueCard, StyledIssueInfo } from './issue-card.styled';
import pencil from '../../assets/icons/edit_pencil.svg';
import deleteImg from '../../assets/icons/delete_basket.png';
import crossImg from '../../assets/icons/cancel-icon.png';

const IssueCard = () => {
  const current = true;
  const game = false;
  const diller = true;
  return (
    <StyledIssueCard className="user-card" current={current}>
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
          <button className="edit-btn btn">
            <img src={pencil} alt="edit" className="edit-img" />
          </button>

          <button className="delete-btn btn">
            <img src={deleteImg} alt="" className="delete-img" />
          </button>
        </div>
      )}
      {game && (
        <button className="cancel-btn btn">
          <img src={crossImg} alt="" />
        </button>
      )}
    </StyledIssueCard>
  );
};

export default IssueCard;
