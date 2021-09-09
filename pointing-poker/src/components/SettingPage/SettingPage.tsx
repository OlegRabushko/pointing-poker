import { StyleSettingPage } from './setting-page.styled';
import editPencil from '../../assets/icons/edit_pencil.svg';
import ScramMaster from '../ScramMaster/ScramMaster';
import MembersBlock from '../MembersBlock/MembersBlock';
import IssuesBlock from '../IssuesBlock/issuesBlock';
import SettingBlock from '../SettingsBlock/SettingsBlock';

const SettingPage = () => {
  return (
    <StyleSettingPage>
      <section className="header">
        <div className="header-text">Spring 23 planning</div>
        <img src={editPencil} alt="" />
      </section>
      <ScramMaster />
      <MembersBlock />
      <IssuesBlock />
      <SettingBlock />
    </StyleSettingPage>
  );
};

export default SettingPage;
