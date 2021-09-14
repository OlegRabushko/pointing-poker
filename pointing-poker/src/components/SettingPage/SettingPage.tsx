import { useSelector } from 'react-redux';
import MembersBlock from '../MembersBlock/MembersBlock';
import LobbyHeaderBlock from '../LobbyHeaderBlock/LobbyHeaderBlock';
import CardValuesBlock from '../CardValuesBlock/CardValuesBlock';
import { StyledSettingPage } from './StyledSettingPage';
import IssuesBlock from '../IssuesBlock/IssuesBlock';
import ScramMaster from '../ScramMaster/ScramMaster';
import SettingBlock from '../SettingsBlock/SettingsBlock';
import CreateIssueForm from '../Forms/CreateIssueForm';
import { RootState } from '../../redux';

const SettingPage = () => {
  const { isIssuesForm } = useSelector((state: RootState) => state.dataConnectForm);

  return (
    <StyledSettingPage>
      <LobbyHeaderBlock />
      <ScramMaster />
      <MembersBlock />
      <IssuesBlock />
      <SettingBlock />
      <CardValuesBlock />
      {isIssuesForm && <CreateIssueForm />}
    </StyledSettingPage>
  );
};

export default SettingPage;
