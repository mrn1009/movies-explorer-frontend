import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchForm.css';

const SearchForm = ({ onSearchMovies, isShortMovies, onFilter }) => {
  const { pathname } = useLocation();
  const [query, setQuery] = useState('');
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    if (pathname === '/movies') {
      const localQuery = localStorage.getItem('movieSearch');
      if (localQuery) {
        setQuery(localQuery);
      }
    }
  }, [pathname]);

  const handleQueryChange = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!query.trim()) {
      setIsErrorMessage(true);
      setTimeout(() => setIsErrorMessage(false), 2000);
    } else {
      onSearchMovies(query);
    }
  }, [query, onSearchMovies]);

  return (
    <section className="search">
      <form noValidate onSubmit={handleSubmit}>
        <div className="search__container">
          <input
            type="text"
            name="query"
            className="search__input"
            placeholder="Фильм"
            required
            value={query}
            onChange={handleQueryChange}
          />
          <button className="search__button">Поиск</button>
        </div>
        <label className="search__shortfilm">
          <input
            type="checkbox"
            className="search__checkbox-input"
            checked={isShortMovies}
            onChange={onFilter}
          />
          <span className="search__switch">
            <span className="search__inner transition-bezier"></span>
          </span>
          <p className="search__shortfilm-text">Короткометражки</p>
        </label>
      </form>
      {isErrorMessage && <p className="search__error-message">{'Запрос поиска не должен быть пустым'}</p>}
    </section>
  );
}

export default SearchForm;
