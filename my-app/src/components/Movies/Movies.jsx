import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import movies from '../../utils/movies';

const Movies = () => {
  return (
    <main className="movies">
      <div className="container">
        <SearchForm />
        <MoviesCardList movies={movies} />
      </div>
    </main>
  );
}

export default Movies;