import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MembersSection from '../MembersSection/MembersSection';
import SettingsSection from '../SettingsSection/SettingsSection';
import LobbyHeaderSection from '../LobbyHeaderSection/LobbyHeaderSection';
import ScramMasterSection from '../ScramMasterSection/ScramMasterSection';
import CardValuesSection from '../CardValuesSection/CardValuesSection';
import { StyledSettingPage } from './StyledSettingPage';
import IssuesSection from '../IssuesSection/issuesSection';
import { RootState } from '../../redux';

const SettingPage = () => {
  const isDialer = useSelector((store: RootState) => store.personStatus.isDialer);

  return (
    <StyledSettingPage>
      <Link to="/game"> link</Link>
      <LobbyHeaderSection />
      <ScramMasterSection />
      <MembersSection />
      {isDialer && (
        <>
          <IssuesSection />
          <SettingsSection />
          <CardValuesSection />
        </>
      )}
    </StyledSettingPage>
  );
};

export default SettingPage;
