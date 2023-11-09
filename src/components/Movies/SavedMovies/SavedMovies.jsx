import React, { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ onCardDelete, favoriteMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShortMovies, setIsShortMovies] = useState(false);
  
  const filterMovies = (movies, query) => {
    const userQuery = query.toLowerCase().trim();
    return movies.filter((movie) => {
      const movieEn = String(movie.nameEN).toLowerCase().includes(userQuery);
      const movieRu = String(movie.nameRU).toLowerCase().includes(userQuery);
      return movieRu || movieEn;
    });
  };

  const filterDuration = (movies) => {
    return movies.filter((movie) => movie.duration < 40);
  };
  
  const handleSearchMovies = (query) => {
    setSearchQuery(query);
  }

  const handleShortFilms = () => {
    setIsShortMovies(!isShortMovies);
  }

  const filteredMovies = isShortMovies
    ? filterDuration(filterMovies(favoriteMovies, searchQuery))
    : filterMovies(favoriteMovies, searchQuery);

  const isNotFound = filteredMovies.length === 0 && searchQuery;

  return (
    <main className="saved-movies">
      <div className="container">
        <SearchForm
          onFilter={handleShortFilms}
          onSearchMovies={handleSearchMovies}
        />
        <MoviesCardList
          cards={filteredMovies}
          onCardDelete={onCardDelete}
          isNotFound={isNotFound}
          isSavedFilms={true}
          savedMovies={favoriteMovies}
        />
      </div>
    </main>
  )
}

export default SavedMovies;
