import React, { useState, useEffect, useCallback } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../../Preloader/Preloader';
import './MoviesCardList.css';

const calculateCardsToShow = () => {
  const screenWidth = document.documentElement.clientWidth;
  if (screenWidth > 1275) {
    return { initial: 12, add: 3 };
  } else if (screenWidth > 643) {
    return { initial: 8, add: 2 };
  } else {
    return { initial: 5, add: 2 };
  }
};

const MoviesCardList = (props) => {
  const { isLoading, onCardLike, onCardDelete, cards, savedMovies, isSavedFilms, isNotFound, isError } = props;
  const [showMovies, setShowMovies] = useState(0);

  const { initial, add } = calculateCardsToShow();

  const updateShowCount = useCallback(() => {
    setShowMovies(initial);
  }, [initial]);

  useEffect(() => {
    updateShowCount();
  }, [updateShowCount, cards.length]);


  useEffect(() => {
    const handleResize = () => {
      updateShowCount();
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [updateShowCount]);

  const getSavedMovieCard = (savedMovies, card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.movieId) || null;
  };
  
  const showMoreFilms = () => {
    setShowMovies((prevCount) => prevCount + add);
  };

  return (
    <section className="movies">
      <Preloader isOpen={isLoading} />
      {!isLoading && (isNotFound || isError) && (
        <p className="movies__search-error">
          {isNotFound ? 'Ничего не найдено' : 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'}
        </p>
      )}
      {!isLoading && !isError && !isNotFound && (
        <>
          <div className="movies__list">
            {cards.slice(0, showMovies).map((card) => (
              <MoviesCard
                saved={getSavedMovieCard(savedMovies, card)}
                card={card}
                cards={cards}
                key={isSavedFilms ? card._id : card.movieId}
                savedMovies={savedMovies}
                onCardLike={onCardLike}
                onCardDelete={onCardDelete}
                isSavedFilms={isSavedFilms}
              />
            ))}
          </div>
          {!isSavedFilms && cards.length > showMovies && (
            <div className="movies__button-container">
              <button onClick={showMoreFilms} className="movies__button" type="button" name="more" >Ещё</button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
