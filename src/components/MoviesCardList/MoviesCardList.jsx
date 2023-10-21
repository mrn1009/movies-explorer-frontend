import './MoviesCardList.css';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = ({ movies }) => {
  const path = useLocation().pathname;

  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="cards" aria-label="Список карточек">
      <div className="cards__grid">
        {movies.map((card) => (
          <MoviesCard key={card.id} card={card} />
        ))}
      </div>

      {isLoading ? (
        <Preloader />
      ) : (
        path === '/movies' && (
          <div className="cards__button-container">
            <button className="cards__button" type="button" name="more" onClick={handlePreloader}>Ещё</button>
          </div>
        )
      )}
    </section>
  );
}

export default MoviesCardList;