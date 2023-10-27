import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import React, { useState, useEffect } from 'react';
import { filterMovies, filterDuration } from '../../utils/FilterMovies';

const SavedMovies = ({ savedMovies, onCardDelete }) => {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies); 
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const onSearchMovies = (query) => {
    setSearchQuery(query);
  }

  const handleShortMovies = () => {
    setIsShortMovies(!isShortMovies);
  }

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(isShortMovies ? filterDuration(moviesList) : moviesList);
  }, [savedMovies, isShortMovies, searchQuery]);

  useEffect(() => {
    if (savedMovies.length === 0) {
      setIsNotFound(false);
      return;
    }
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies, savedMovies]);

  return (
    <main className="saved-movies">
      <div className="container">
        <SearchForm onSearchMovies={onSearchMovies} onFilter={handleShortMovies} />
        <MoviesCardList 
          isNotFound={isNotFound}
          isSavedFilms={true}
          cards={filteredMovies}
          savedMovies={savedMovies}
          onCardDelete={onCardDelete}
        />
      </div>
    </main>
  )
}

export default SavedMovies;