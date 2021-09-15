import { FC } from 'react';
import { Cards } from '../CardValuesBlock/CardValuesBlock';
import { StyledStatisticsSection } from './StyledStatisticsSection';

interface IStatisticsSectionProps {
  isStats: boolean;
}

const StatisticsSection: FC<IStatisticsSectionProps> = ({ isStats }) => {
  return (
    <StyledStatisticsSection>
      <div className="top-text">Results:</div>
      <div className="card-container">
        <Cards isStats={isStats} />
      </div>
    </StyledStatisticsSection>
  );
};

export default StatisticsSection;
