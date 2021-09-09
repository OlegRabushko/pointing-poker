import addImg from '../../assets/icons/add-plus.png';
import { AddCardContainerDiv } from './StyledAddCard';

const AddCard = () => {
  return (
    <AddCardContainerDiv>
      <img src={addImg} alt="add-ico" />
    </AddCardContainerDiv>
  );
};

export default AddCard;
