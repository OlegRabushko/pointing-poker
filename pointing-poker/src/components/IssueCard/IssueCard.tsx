import { useDispatch, useSelector } from 'react-redux';
import { FC } from 'react';
import pencil from '../../assets/icons/edit_pencil.svg';
import deleteImg from '../../assets/icons/delete_basket.png';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';
import { RootState } from '../../redux';
import { IIssueCard } from '../Forms/FormTypes';
import { deleteIssueCard } from '../../redux/FormRedux/FormActions';

const IssueCard: FC<IIssueCard> = (props) => {
  const { issueTitle, issuePriority, issueID } = props;

  const dispatch = useDispatch();

  const current = false;
  const game = false;
  const { isDialer } = useSelector((state: RootState) => state.personStatus);

  return (
    <StyledIssueCard current={current}>
      <StyledIssueInfo>
        {current && game ? (
          <span className="current-issue">Current</span>
        ) : (
          <span className="plug"></span>
        )}
        <span className="issue-card-name">{issueTitle}</span>
        <span className="issue-card-prior">{issuePriority} priority</span>
      </StyledIssueInfo>
      {!game && isDialer && (
        <div className="edit-wrapper">
          <img src={pencil} alt="edit" className="edit-img" />
          <img
            src={deleteImg}
            alt="delete"
            className="delete-img"
            onClick={() => dispatch(deleteIssueCard(issueID))}
          />
        </div>
      )}
    </StyledIssueCard>
  );
};

export default IssueCard;
