import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { Cards } from '../CardValuesSection/CardValuesSection';
import { StyledStatisticsSection } from './StyledStatisticsSection';

interface IStatisticsSectionProps {
  isStats: boolean;
}

const StatisticsSection: FC<IStatisticsSectionProps> = ({ isStats }) => {
  const { minutes, seconds } = useSelector((store: RootState) => store.timer);
  const isTimer = useSelector((store: RootState) => store.settings.timerNeeded);
  const scramMasterAsPlayer = useSelector((store: RootState) => store.settings.scramMasterAsPlayer);
  const playersCheckedCard = useSelector((store: RootState) => store.card.count);
  const allUsers = useSelector((store: RootState) => store.initial.users);
  const allUsersLength = Object.keys(allUsers).length;

  const ResultsSection = () => (
    <StyledStatisticsSection>
      <div className="top-text">Results:</div>
      <div className="card-container">
        <Cards isStatisticSection isStats={isStats} />
      </div>
    </StyledStatisticsSection>
  );

  return (
    <>
      {isTimer && minutes === 0 && seconds === 0 && <ResultsSection />}
      {!isTimer && scramMasterAsPlayer && playersCheckedCard === allUsersLength && (
        <ResultsSection />
      )}
      {!isTimer && !scramMasterAsPlayer && playersCheckedCard === allUsersLength - 1 && (
        <ResultsSection />
      )}
    </>
  );
};

export default StatisticsSection;
