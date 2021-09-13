import MembersBlock from '../MembersBlock/MembersBlock';
import SettingBlock from '../SettingsBlock/SettingsBlock';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import ScramMasterBlock from '../ScramMasterBlock/ScramMasterBlock';
import CardValuesBlock from '../CardValuesBlock/CardValuesBlock';
import { StyledSettingPage } from './StyledSettingPage';
import IssuesBlock from '../IssuesBlock/issuesBlock';

const SettingPage = () => {
  return (
    <StyledSettingPage>
      <LobbyHeaderBlock />
      <ScramMasterBlock />
      <MembersBlock />
      <IssuesBlock />
      <SettingBlock />
      <CardValuesBlock />
    </StyledSettingPage>
  );
};

export default SettingPage;
