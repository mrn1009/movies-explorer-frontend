import { SHORTMOVIES_DURATION } from "./constants";

export const formatDuration = (duration) => {
    const min = duration % 60;
    const hours = (duration - min) / 60;
    return hours ? `${hours}ч ${min}м` : `${min}м`;
  }
  
  export const filterMovies = (movies, query) => {
    const moviesByQuery = movies.filter((movie) => {
      const movieRu = String(movie.nameRU).toLowerCase().trim();
      const movieEn = String(movie.nameEN).toLowerCase().trim();
      const userQuery = query.toLowerCase().trim();
      return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
    });
    return moviesByQuery;
  }
  
  export const filterDuration = (movies) => {
    return movies.filter((movie) => movie.duration < SHORTMOVIES_DURATION);
  }