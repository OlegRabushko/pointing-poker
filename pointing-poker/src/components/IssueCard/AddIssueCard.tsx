import addPlusImg from '../../assets/icons/plus-add.png';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';

const AddIssueCard = () => {
  const current = true;
  const game = true;
  return (
    <StyledIssueCard className="user-card" current={current}>
      <StyledIssueInfo>
        <span className="issue-card__name">Creat new Issue</span>
      </StyledIssueInfo>
      {game && <img src={addPlusImg} className="plus-img" alt="" />}
    </StyledIssueCard>
  );
};

export default AddIssueCard;
