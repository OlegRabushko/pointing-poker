import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import GameCard from '../GameCard/GameCard';
import { StyledStatisticsSection } from './StyledStatisticsSection';

interface IStatisticsSectionProps {
  isStats: boolean;
}

const StatisticsSection: FC<IStatisticsSectionProps> = () => {
  const [showRes, setShowRes] = useState(false);
  // const { minutes, seconds } = useSelector((store: RootState) => store.timer);
  // const isTimer = useSelector((store: RootState) => store.settings.timerNeeded);
  const { issues, currIssueId } = useSelector((store: RootState) => store.issues);

  useEffect(() => {
    setShowRes(!showRes);
  }, [currIssueId]);

  return (
    <>
      {currIssueId && issues[currIssueId].results.length ? (
        <StyledStatisticsSection>
          <div className="top-text">Results:</div>
          <div className="card-container">
            {issues[currIssueId].results.map((res) => (
              <GameCard
                key={res.id}
                ID={res.id}
                cardStat={res.stats}
                content={res.content}
                isStats
                type={res.id}
              />
            ))}
          </div>
        </StyledStatisticsSection>
      ) : null}

      {/* {!isTimer && (
        <StyledStatisticsSection>
          <div className="top-text">Results:</div>
          <div className="card-container">
            <Cards isStats={isStats} />
          </div>
        </StyledStatisticsSection>
      )} */}
    </>
  );
};

export default StatisticsSection;
