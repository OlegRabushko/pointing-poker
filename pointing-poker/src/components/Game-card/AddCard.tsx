import addImg from '../../assets/icons/add-plus.png';
import { StyledAddCard } from './add-card.styled';

const AddCard = () => {
  return (
    <StyledAddCard>
      <img src={addImg} alt="" />
    </StyledAddCard>
  );
};

export default AddCard;
