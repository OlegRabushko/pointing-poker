import MembersSection from '../MembersSection/MembersSection';
import SettingsSection from '../SettingsSection/SettingsSection';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import ScramMasterSection from '../ScramMasterSection/ScramMasterSection';
import CardValuesSection from '../CardValuesSection/CardValuesSection';
import { StyledSettingPage } from './StyledSettingPage';
import IssuesSection from '../IssuesSection/issuesSection';

const SettingPage = () => {
  return (
    <StyledSettingPage>
      <LobbyHeaderSection />
      <ScramMasterSection />
      <MembersSection />
      <IssuesSection />
      <SettingsSection />
      <CardValuesSection />
    </StyledSettingPage>
  );
};

export default SettingPage;
