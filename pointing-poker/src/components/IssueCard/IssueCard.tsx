/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch, useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC, useState } from 'react';
import pencil from '../../assets/icons/edit_pencil.svg';
import deleteImg from '../../assets/icons/delete_basket.png';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';
import { RootState } from '../../redux';
import { IIssueCard } from '../Forms/FormTypes';
import {
  deleteIssueCard,
  renameIssuePriority,
  renameIssueTitle,
  toggleCurrentIssueCard,
} from '../../redux/FormRedux/FormActions';

const IssueCard: FC<IIssueCard> = (props) => {
  const { issueTitle, issuePriority, issueID, current } = props;

  const { register, handleSubmit, reset } = useForm<IIssueCard>({ mode: 'onChange' });

  const dispatch = useDispatch();
  const isDialer = useSelector((state: RootState) => state.personStatus.isDialer);

  const [isUpdateIssueTitle, setUpdateIssueTitle] = useState<boolean>(false);

  const toggleCurrentState = () => {
    dispatch(toggleCurrentIssueCard(issueID));
  };

  const onSubmit: SubmitHandler<IIssueCard> = (data) => {
    dispatch(renameIssueTitle(data.issueTitle, issueID));
    dispatch(renameIssuePriority(data.issuePriority, issueID));
    setUpdateIssueTitle(false);
    reset();
  };

  const handleEdditBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUpdateIssueTitle(true);
  };

  const handleDeleteBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteIssueCard(issueID));
  };

  return (
    <StyledIssueCard current={current} onClick={toggleCurrentState}>
      <StyledIssueInfo>
        {isUpdateIssueTitle ? (
          <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="upd-issue-card-title"
              defaultValue={issueTitle}
              {...register('issueTitle', { maxLength: 30 })}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
            <select
              className="upd-issue-card-priority"
              {...register('issuePriority')}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <option value="Low">Low</option>
              <option value="Middle">Middle</option>
              <option value="Hight">Hight</option>
            </select>
          </form>
        ) : (
          <>
            <span className="issue-card-name">{issueTitle}</span>
            <span className="issue-card-prior">{issuePriority} priority</span>
          </>
        )}
      </StyledIssueInfo>
      {isDialer && (
        <div className="edit-wrapper">
          <img src={pencil} alt="edit" className="edit-img" onClick={handleEdditBtn} />
          <img src={deleteImg} alt="delete" className="delete-img" onClick={handleDeleteBtn} />
        </div>
      )}
    </StyledIssueCard>
  );
};

export default IssueCard;
