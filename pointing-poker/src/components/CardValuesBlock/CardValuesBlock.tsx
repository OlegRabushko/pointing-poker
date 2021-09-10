import { useSelector } from 'react-redux';
import GameCard from '../GameCard/GameCard';
import { StyleCardValuesBlock } from './StyledCardValues';
import coffeeIco from '../../assets/icons/coffee-ico.svg';
import questionIco from '../../assets/icons/question-ico.svg';
import { RootState } from '../../redux';

const fibonacciSequence = [1, 2, 3, 5, 8, 13, 21, 34];
const authorSequence = [1, 2, 3, 6, 10, 20, 30, 40];

const CardValuesBlock = () => {
  const state = useSelector((store: RootState) => store.settings);
  return (
    <StyleCardValuesBlock>
      <div className="text">Card Values:</div>
      <div className="flex-box">
        {state.coffeeCardNeeded && <GameCard type="Coffee" content={coffeeIco} />}

        {state.sequenceType === 'Fibonacci'
          ? fibonacciSequence.map((el, i) => <GameCard key={i} type="SP" content={el} />)
          : authorSequence.map((el, i) => <GameCard key={i} type="SP" content={el} />)}
        {state.questionCardNeeded && <GameCard type="Unknown" content={questionIco} />}
      </div>
    </StyleCardValuesBlock>
  );
};

export default CardValuesBlock;
