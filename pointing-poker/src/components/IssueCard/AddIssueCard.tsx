import { useDispatch, useSelector } from 'react-redux';
import addPlusImg from '../../assets/icons/plus-add.png';
import { RootState } from '../../redux';
import { showIssuesForm } from '../../redux/FormRedux/FormActions';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';

const AddIssueCard = () => {
  const dispatch = useDispatch();
  const { isIssuesForm } = useSelector((state: RootState) => state.dataConnectForm);

  const onShowConnectForm = () => {
    dispatch(showIssuesForm(!isIssuesForm));
  };

  const current = true;
  const game = true;
  return (
    <StyledIssueCard
      className="user-card add-user-card"
      current={current}
      onClick={onShowConnectForm}
    >
      <StyledIssueInfo>
        <span className="issue-card__name">Creat new Issue</span>
      </StyledIssueInfo>
      {game && <img src={addPlusImg} className="plus-img" alt="" />}
    </StyledIssueCard>
  );
};

export default AddIssueCard;
