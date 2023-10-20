import './MoviesCard.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ card }) => {
  const path = useLocation().pathname;

  const [isCardSaved, setIsCardSaved] = useState(false);

  const handleOnClick = () => {
    setIsCardSaved(!isCardSaved);
  };

  return (
      <article className="card">
        <div className="card__description">
          <h3 className="card__title">{card.title}</h3>
          <p className="card__duration">{card.duration}</p>
        </div>
        <img className="card__poster" src={card.image} alt={card.title} />

        {path === '/movies' ?
          !isCardSaved ? (
            <button type="button" className="card__button card__button_type_save" onClick={handleOnClick}>
              Сохранить
            </button>
          ) : (
            <button type="button" className="card__button card__button_type_saved" onClick={handleOnClick}/>
        ) : (
          <button type="button" className="card__button card__button_type_unsave" />
        )}
      </article>
  );
}

export default MoviesCard;