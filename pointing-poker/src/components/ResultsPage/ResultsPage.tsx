/* eslint-disable no-self-compare */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import GameCard from '../GameCard/GameCard';
import { blueColor, whiteColor } from '../GlobalStyle/StyledGlobal';
import { StyledResultsPage } from './StyledResultsPage';
import coffeeIco from '../../assets/icons/coffee-ico.svg';
import questionIco from '../../assets/icons/question-ico.svg';
import { RootState } from '../../redux';

const setContent = (content: string | number) => {
  if (Number(content) === Number(content)) return content;
  if (content === 'Unknown') return questionIco;
  if (content === 'Coffee') return coffeeIco;
  return '';
};

const ResultsPage = () => {
  const results = useSelector((store: RootState) => store.results.store);

  return (
    <StyledResultsPage>
      <Link to="/">
        <Button text="Exit" color={whiteColor} colorBG={blueColor} />
      </Link>
      {results.map(
        (el, i) =>
          el && (
            <div key={i}>
              <div className="title">{el.title}:</div>
              <section className="cards-section">
                {el.cardsResult.map((card, ind) => (
                  <div className="card" key={ind}>
                    <div className="stats">{card.stats}%</div>
                    <GameCard
                      content={String(setContent(card.content))}
                      ID={card.id}
                      type={Number(card.id) === Number(card.id) ? 'SP' : card.id}
                      isStats={false}
                    />
                  </div>
                ))}
              </section>
            </div>
          ),
      )}
    </StyledResultsPage>
  );
};

export default ResultsPage;
