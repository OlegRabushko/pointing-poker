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
  return (
    <>
      {isTimer && minutes === 0 && seconds === 0 && (
        <StyledStatisticsSection>
          <div className="top-text">Results:</div>
          <div className="card-container">
            <Cards isStatisticSection isStats={isStats} />
          </div>
        </StyledStatisticsSection>
      )}
      {!isTimer && (
        <StyledStatisticsSection>
          <div className="top-text">Results:</div>
          <div className="card-container">
            <Cards isStats={isStats} />
          </div>
        </StyledStatisticsSection>
      )}
    </>
  );
};

export default StatisticsSection;
