import { IssueCardContainer, IssueInfoDiv } from './StyledIssueCard';
import addPlusImg from '../../assets/icons/plus-add.png';

const AddIssueCard = () => {
  const current = true;
  const game = true;
  return (
    <IssueCardContainer className="user-card" current={current}>
      <IssueInfoDiv>
        <span className="issue-card__name">Creat new Issue</span>
      </IssueInfoDiv>
      {game && <img src={addPlusImg} className="plus-img" alt="" />}
    </IssueCardContainer>
  );
};

export default AddIssueCard;
