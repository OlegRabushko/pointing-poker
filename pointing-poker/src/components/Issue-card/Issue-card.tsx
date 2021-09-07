import { IssueCardContainer, IssueInfoDiv } from './issue-card.style';
import pencil from '../../assets/icons/edit_pencil.svg';
import deleteImg from '../../assets/icons/delete_basket.png';

const IssueCard = () => {
  const current = true;
  const game = false;
  const diller = true;
  return (
    <IssueCardContainer className="user-card" current={current}>
      <IssueInfoDiv>
        {current && game ? (
          <span className="current-issue">Current</span>
        ) : (
          <span className="plug"></span>
        )}
        <span className="issue-card__name">Issue 4523</span>
        <span className="issue-card__prior">low priority</span>
      </IssueInfoDiv>
      {!game && diller && (
        <div className="edit-wrapper">
          <img src={pencil} alt="edit" className="edit-img" />
          <img src={deleteImg} alt="" className="delete-img" />
        </div>
      )}
    </IssueCardContainer>
  );
};

export default IssueCard;
