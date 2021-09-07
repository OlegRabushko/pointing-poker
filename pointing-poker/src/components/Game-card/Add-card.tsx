import addImg from '../../assets/icons/add-plus.png';
import { AddCardContainerDiv } from './add-card.style';

const AddCard = () => {
  return (
    <AddCardContainerDiv>
      <img src={addImg} alt="" />
    </AddCardContainerDiv>
  );
};

export default AddCard;
