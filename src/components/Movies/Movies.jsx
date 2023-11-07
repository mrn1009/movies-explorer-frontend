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
  const [allMovies, setAllMovies] = useState([]);

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
    const filtered = filterDuration(allMovies);
    setFilteredFilms(!isShortFilms ? filtered : filterMovies(filtered, searchQuery));
    localStorage.setItem('shortMovies', !isShortFilms);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const onSearchMovies = (query) => {
    setIsLoading(true);
    setSearchQuery(query);
    localStorage.setItem('movieSearch', query);
    localStorage.setItem('shortMovies', isShortFilms);
    const filteredFilms = filterMovies(allMovies, query);
    const finalMovies = isShortFilms ? filterDuration(filteredFilms) : filteredFilms;
    setFilteredFilms(finalMovies);
    setIsNotFound(finalMovies.length === 0 && query);
    setIsRequestError(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (allMovies.length === 0) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((cardsData) => {
          setAllMovies(cardsData);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [allMovies]);

  useEffect(() => {
    const isShortMoviesStored = localStorage.getItem('shortMovies') === 'true';
    const filtered = isShortMoviesStored ? filterDuration(allMovies) : allMovies;
    setFilteredFilms(filtered);
    setIsShortFilms(isShortMoviesStored);
  }, [allMovies]);

  return (
    <main className="movies">
      <div className="container">
        <SearchForm onFilter={handleShortMovies} onSearchMovies={onSearchMovies} isShortMovies={isShortFilms} />
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