/* eslint-disable react/jsx-indent */
import { useLocation } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import GameCard from '../GameCard/GameCard';
import { StyleCardValuesSection } from './StyledCardValues';
import coffeeIco from '../../assets/icons/coffee-ico.svg';
import questionIco from '../../assets/icons/question-ico.svg';
import { RootState } from '../../redux';

const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34];
const authorSequence = [1, 2, 3, 6, 10, 20, 30, 40];

interface IGameCardsProps {
  isStats: boolean;
  isStatisticSection?: boolean;
}

export const Cards: FC<IGameCardsProps> = ({ isStats, isStatisticSection }) => {
  const [isHide, setIsHide] = useState(false);
  const location = useLocation();
  const state = useSelector((store: RootState) => store.settings);

  useEffect(() => {
    if (location.pathname === '/settings') {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [location.pathname]);

  return (
    <StyleCardValuesSection events={isHide}>
      <div className="flex-box">
        {state.coffeeCardNeeded && (
          <GameCard
            isStatisticSection={isStatisticSection}
            isStats={isStats}
            ID="Coffee"
            type="Coffee"
            content={coffeeIco}
          />
        )}
        {state.sequenceType === 'Fibonacci'
          ? fibonacciSequence.map((el, i) => (
              <GameCard
                isStatisticSection={isStatisticSection}
                isStats={isStats}
                ID={i + 1}
                key={i}
                type="SP"
                content={el}
              />
            ))
          : authorSequence.map((el, i) => (
              <GameCard
                isStatisticSection={isStatisticSection}
                isStats={isStats}
                ID={i + 1}
                key={i}
                type="SP"
                content={el}
              />
            ))}
        {state.questionCardNeeded && (
          <GameCard
            isStatisticSection={isStatisticSection}
            isStats={isStats}
            ID="Unknown"
            type="Unknown"
            content={questionIco}
          />
        )}
      </div>
    </StyleCardValuesSection>
  );
};

const CardValuesSection = () => {
  return (
    <StyleCardValuesSection>
      <div className="text">Card Values:</div>
      <Cards isStats={false} />
    </StyleCardValuesSection>
  );
};

export default CardValuesSection;
