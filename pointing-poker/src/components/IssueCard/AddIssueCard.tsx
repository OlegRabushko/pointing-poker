import { useDispatch, useSelector } from 'react-redux';
import addPlusImg from '../../assets/icons/plus-add.png';
import { RootState } from '../../redux';
import { showIssuesForm } from '../../redux/FormRedux/FormActions';
import { StyledIssueCard, StyledIssueInfo } from './StyledIssueCard';

const AddIssueCard = () => {
  const dispatch = useDispatch();
  const { isIssuesForm } = useSelector((state: RootState) => state.showForms);
  const isDialer = useSelector((state: RootState) => state.personStatus.isDialer);

  const ahowCreateIssueForm = () => {
    dispatch(showIssuesForm(!isIssuesForm));
  };

  return (
    <>
      {isDialer && (
        <StyledIssueCard current={false} onClick={ahowCreateIssueForm}>
          <StyledIssueInfo>
            <span className="issue-card__name">Creat new Issue</span>
          </StyledIssueInfo>
          <img src={addPlusImg} className="plus-img" alt="" />
        </StyledIssueCard>
      )}
    </>
  );
};

export default AddIssueCard;
