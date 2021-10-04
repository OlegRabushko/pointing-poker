/* eslint-disable react/jsx-props-no-spreading */
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FC, useEffect, useState } from 'react';
import pencil from '../../assets/icons/edit_pencil.svg';
import deleteImg from '../../assets/icons/delete_basket.png';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';
import { RootState } from '../../redux';
import { IIssueCard } from '../Forms/FormTypes';
import { setCompletedIssueCard } from '../../redux/FormRedux/FormActions';
import { deleteIssueById, updateIssueById } from '../../API/RestAPI';
import { sendCurrIssue } from '../../sockets/SocketsAPI';
import { IGameCardValues, IssueData } from '../../types/interfaces';

interface IssuseCardProps {
  issueId: string;
  title: string;
  priority: string;
  isCompleted: boolean;
  isCurrent: boolean;
  results: IGameCardValues[];
}

const IssueCard: FC<IssuseCardProps> = (props) => {
  const { title, priority, issueId, isCompleted } = props;
  const { register, handleSubmit, reset } = useForm<IIssueCard>({ mode: 'onChange' });
  const dispatch = useDispatch();
  const isDialer = useSelector((state: RootState) => state.personStatus.isDialer);
  const [isUpdateIssueTitle, setUpdateIssueTitle] = useState<boolean>(false);
  const location = useLocation().pathname;
  const { issues, currIssueId } = useSelector((state: RootState) => state.issues);
  const gameId = useSelector((state: RootState) => state.initial.gameId);
  const { seconds, minutes } = useSelector((state: RootState) => state.timer);
  const isTimer = useSelector((state: RootState) => state.settings.timerNeeded);

  // useEffect(() => {
  //   const data = {
  //     title,
  //     priority,
  //     issueId,
  //   };
  //   dispatch(createIssueCard(data, issueId, isCurrent, isCompleted));
  // }, []);

  useEffect(() => {
    if (isTimer && seconds === 0 && minutes === 0) {
      Object.keys(issues).forEach((issueIndx) => {
        if (issues[issueIndx].isCurrent) {
          dispatch(setCompletedIssueCard({ id: issues[issueIndx]._id, count: true }));
        }
      });
    }
  }, [seconds, minutes]);

  const onSubmit: SubmitHandler<IssueData> = (data) => {
    updateIssueById(data);
    // dispatch(renameIssueTitle(data.title, issueId));
    // dispatch(renameIssuePriority(data.priority, issueId));
    setUpdateIssueTitle(false);
    reset();
  };

  const setCurrentIssue = () => {
    // dispatch(toggleCurrentIssueCard(issueId));
    sendCurrIssue(issueId, gameId);
  };

  const handleEditBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUpdateIssueTitle(true);
  };

  const handleDeleteBtn = (e: React.MouseEvent) => {
    e.stopPropagation();
    // dispatch(deleteIssueCard(issueId));
    deleteIssueById(issueId);
  };

  return (
    <StyledIssueCard
      current={!!(location !== '/settings' && issueId === currIssueId)}
      onClick={location !== '/settings' && isDialer ? setCurrentIssue : null}
    >
      <StyledIssueInfo>
        {isUpdateIssueTitle ? (
          <form onSubmit={handleSubmit(onSubmit)} onBlur={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="upd-issue-card-title"
              defaultValue={title}
              {...register('title', { maxLength: 30 })}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
            <select
              className="upd-issue-card-priority"
              {...register('priority')}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <option value="Low">Low</option>
              <option value="Middle">Middle</option>
              <option value="Hight">Hight</option>
            </select>
          </form>
        ) : (
          <>
            <span className="issue-card-name">{title}</span>
            <span className="issue-card-prior">{priority} priority</span>
            {isCompleted && <div className="selected-card-skin" />}
          </>
        )}
      </StyledIssueInfo>
      {isDialer && (
        <div className="edit-wrapper">
          {location === '/settings' && (
            <img src={pencil} alt="edit" className="edit-img" onClick={handleEditBtn} />
          )}
          {!isCompleted && (
            <img src={deleteImg} alt="delete" className="delete-img" onClick={handleDeleteBtn} />
          )}
        </div>
      )}
    </StyledIssueCard>
  );
};

export default IssueCard;
