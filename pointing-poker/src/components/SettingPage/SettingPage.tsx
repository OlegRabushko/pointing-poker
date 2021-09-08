import ScramMasterBlock from '../ScramMasterBlock/ScramMasterBlock';
import MembersBlock from '../MembersBlock/MembersBlock';
import IssuesBlock from '../IssuesBlock/issuesBlock';
import SettingBlock from '../SettingsBlock/SettingsBlock';
import CardValuesBlock from '../CardValuesBlock/CardValuesBlock';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';

const SettingPage = () => {
  return (
    <>
      <LobbyHeaderBlock />
      <ScramMasterBlock />
      <MembersBlock />
      <IssuesBlock />
      <SettingBlock />
      <CardValuesBlock />
    </>
  );
};

export default SettingPage;
