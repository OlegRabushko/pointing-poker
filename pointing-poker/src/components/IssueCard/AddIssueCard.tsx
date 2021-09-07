import { StyledIssueCard, StyledIssueInfo } from './issue-card.styled';
import addPlusImg from '../../assets/icons/plus-add.png';

const AddIssueCard = () => {
  const current = true;
  const game = true;
  return (
    <StyledIssueCard className="user-card" current={current}>
      <StyledIssueInfo>
        <span className="issue-card-name">Creat new Issue</span>
      </StyledIssueInfo>
      {game && (
        <button className="add-btn btn">
          <img src={addPlusImg} alt="" />
        </button>
      )}
    </StyledIssueCard>
  );
};

export default AddIssueCard;
