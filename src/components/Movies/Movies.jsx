import React, { useState, useEffect } from 'react';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import * as moviesApi from '../../utils/MoviesApi';
import './Movies.css';

const Movies = ({ onCardLike, onCardDelete, favoriteMovies }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);

  const filterMovies = (movies, query) => {
    const moviesByQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const userQuery = query.toLowerCase().trim();
      return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
    });
    return moviesByQuery;
  };

  const filterDuration = (movies) => {
    return movies.filter((movie) => movie.duration < 40);
  };

  const handleShortMovies = () => {
    setIsShortFilms(!isShortFilms);
    const filtered = filterDuration(initialMovies);
    setFilteredFilms(!isShortFilms ? filtered : initialMovies);
    localStorage.setItem('shortMovies', !isShortFilms);
  };
  
  const onSearchMovies = (query) => {
    setIsLoading(true);
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', isShortFilms);
    moviesApi
      .getMovies()
      .then((cardsData) => {
        const filteredFilms = filterMovies(cardsData, query);
        const finalMovies = isShortFilms ? filterDuration(filteredFilms) : filteredFilms;
        setInitialMovies(filteredFilms);
        setFilteredFilms(finalMovies);
        setIsNotFound(finalMovies.length === 0 && query);
        setIsRequestError(false);
      })
      .catch((err) => {
        setIsRequestError(true);
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const isShortMoviesStored = localStorage.getItem('shortMovies') === 'true';
    const filtered = isShortMoviesStored ? filterDuration(storedMovies) : storedMovies;
    setInitialMovies(storedMovies);
    setFilteredFilms(filtered);
    setIsShortFilms(isShortMoviesStored);
  }, []); 

  useEffect(() => {
    if (initialMovies.length > 0) {
      localStorage.setItem('movies', JSON.stringify(initialMovies));
    }
  }, [initialMovies]);

  return (
    <main className="movies">
      <div className="container">
        <SearchForm onFilter={handleShortMovies} onSearchMovies={onSearchMovies} isShortMovies={isShortFilms}/>
        <MoviesCardList
          isSavedFilms={false}
          cards={filteredFilms}
          savedMovies={favoriteMovies}
          onCardLike={onCardLike}
          onCardDelete={onCardDelete}
          isLoading={isLoading}
          isNotFound={isNotFound}
          isRequestError={isRequestError}  
        />
      </div>
    </main>
  );
  
};

export default Movies;

