import { useDispatch, useSelector } from 'react-redux';
import addPlusImg from '../../assets/icons/plus-add.png';
import { RootState } from '../../redux';
import { showIssuesForm } from '../../redux/FormRedux/FormActions';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';

const AddIssueCard = () => {
  const current = true;
  const game = true;

  const dispatch = useDispatch();
  const { isIssuesForm } = useSelector((state: RootState) => state.showForms);

  const ahowCreateIssueForm = () => {
    dispatch(showIssuesForm(!isIssuesForm));
  };

  return (
    <StyledIssueCard className="add-user-card" current={current} onClick={ahowCreateIssueForm}>
      <StyledIssueInfo>
        <span className="issue-card__name">Creat new Issue</span>
      </StyledIssueInfo>
      {game && <img src={addPlusImg} className="plus-img" alt="" />}
    </StyledIssueCard>
  );
};

export default AddIssueCard;
