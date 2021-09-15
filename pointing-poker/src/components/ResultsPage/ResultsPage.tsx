/* eslint-disable no-else-return */
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import GameCard from '../GameCard/GameCard';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { StyledResultsPage } from './StyledResultsPage';
import coffeeIco from '../../assets/icons/coffee-ico.svg';
import questionIco from '../../assets/icons/question-ico.svg';

const arr = [
  {
    title: 'Issue-1',
    link: '',
    priority: 'low',
    cardsResult: [
      {
        id: 'Coffee',
        stats: 30,
        content: 'Coffee',
      },
      {
        id: 2,
        stats: 60,
        content: 2,
      },
      {
        id: 3,
        stats: 10,
        content: 5,
      },
    ],
  },
  {
    title: 'Issue-2',
    link: '',
    priority: 'hight',
    cardsResult: [
      {
        id: 'Unknown',
        stats: 30,
        content: 'Unknown',
      },
      {
        id: 1,
        stats: 47,
        content: 'Unknown',
      },
      {
        id: 5,
        stats: 23,
        content: 20,
      },
    ],
  },
];
const setContent = (content: string | number) => {
  if (typeof content === 'number') return content;
  if (content === 'Unknown') return questionIco;
  if (content === 'Coffee') return coffeeIco;
  return '';
};

const ResultsPage = () => {
  return (
    <StyledResultsPage>
      <Link to="/">
        <Button text="Exit" color={whiteColor} colorBG={blueColor} />
      </Link>
      <section>
        {arr.map((el, i) => (
          <div key={i}>
            <div>{el.title}</div>
            {el.cardsResult.map((card, ind) => (
              <section className="cards-section" key={ind}>
                <GameCard
                  content={setContent(card.content)}
                  ID={card.id}
                  type={typeof card.id === 'number' ? 'SP' : card.id}
                  isStats={false}
                />
              </section>
            ))}
          </div>
        ))}
      </section>
    </StyledResultsPage>
  );
};

export default ResultsPage;
