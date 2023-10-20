import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/savedMovies';

const SavedMovies = () => {
  return (
    <main className="saved-movies">
      <div className="container">
        <SearchForm />
        <MoviesCardList movies={movies} />
      </div>
    </main>
  )
}

export default SavedMovies;