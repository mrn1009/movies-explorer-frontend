import React from 'react';
import './MoviesCard.css';

const MoviesCard = ({ saved, savedMovies, isSavedFilms, card, onCardLike, onCardDelete }) => {
  const cardMovieDuration = (duration) => {
    const min = duration % 60;
    const hours = (duration - min) / 60;
    return hours ? `${hours}ч ${min}м` : `${min}м`;
  };

  const clickCard = () => {
    if (saved) {
      onCardDelete(savedMovies.find((m) => m.movieId === card.movieId));
    } else {
      onCardLike(card);
    }
  };

  const movieSavedClassName = saved ? 'movieCard__button movieCard__button_saved' : 'movieCard__button movieCard__button_save';

  return (
    <article className="movieCard">
      <div className="movieCard__description">
        <h2 className="movieCard__title">{card.nameRU}</h2>
        <p className="movieCard__duration">{cardMovieDuration(card.duration)}</p>
      </div>
      <a rel="noreferrer" target="_blank" href={card.trailerLink}><img className="movieCard__image" src={card.image} alt={card.nameRU}/></a>
      {isSavedFilms ? (
        <button type="button" className="movieCard__button movieCard__button_delete" 
        onClick={() => onCardDelete(card)} />
      ) : (
        <button type="button" onClick={clickCard} className={movieSavedClassName}>{saved ? '' : 'Сохранить'}</button>
      )}
    </article>
  );
};

export default MoviesCard;
