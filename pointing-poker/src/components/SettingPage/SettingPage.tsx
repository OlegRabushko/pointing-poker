import MembersBlock from '../MembersBlock/MembersBlock';
import SettingBlock from '../SettingsBlock/SettingsBlock';
import IssuesBlock from '../IssuesBlock/IssuesBlock';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import ScramMasterBlock from '../ScramMasterBlock/ScramMasterBlock';
import CardValuesBlock from '../CardValuesBlock/CardValuesBlock';

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
