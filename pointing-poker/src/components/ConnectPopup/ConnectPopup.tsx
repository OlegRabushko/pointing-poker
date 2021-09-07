import { Button } from '../Button/Button';
import { ImageContainer } from '../User-card/UserCard.style';
import { StyledConnectForm } from './StyledConnectForm';
import { StyledConnectWrapper } from './StyledConnectWrapper';

const ConnectPopup = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((w) => w.slice(0, 1))
      .join('');
  };

  return (
    <StyledConnectWrapper>
      <StyledConnectForm>
        <legend>Connect to lobby</legend>
        <div className="connect-form-wrapper">
          <label className="connect-label">
            Your first name:
            <input className="connect-input" />
          </label>
          <label className="connect-label">
            Your last name:
            <input className="connect-input" />
          </label>
          <label className="connect-label">
            Your job position:
            <input className="connect-input" />
          </label>
          <label className="upload-label">
            <span>Choose avatar</span>
            <input type="file" className="upload-input" />
          </label>
          <Button type="submit" display="inline-block">
            Load File
          </Button>
          <ImageContainer className="connect-avatar">
            <p className="initials">{getInitials('James Blake')}</p>
          </ImageContainer>
        </div>
        <div className="connect-buttons-container">
          <Button borderRadius="5px" height="60px">
            Confirm
          </Button>
          <Button borderRadius="5px" height="60px" background="#fff" color="#2B3A67">
            Cancel
          </Button>
        </div>
      </StyledConnectForm>
    </StyledConnectWrapper>
  );
};

export default ConnectPopup;
