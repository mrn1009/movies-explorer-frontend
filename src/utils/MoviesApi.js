const handleResponse = async (res) => {
  if (res.ok) {
    const movies = await res.json();
    return movies.map(getKeysFilm);
  }
  const err = await res.json();
  return Promise.reject(err);
};

const getKeysFilm = (movie) => {
  return {
    movieId: movie.id,
    nameRU: movie.nameRU,
    nameEN: movie.nameEN,
    director: movie.director,
    country: movie.country,
    year: movie.year,
    duration: movie.duration,
    description: movie.description,
    trailerLink: movie.trailerLink,
    image: `https://api.nomoreparties.co${movie.image.url}`,
    thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
  };
};

export const getMovies = async () => {
  const response = await fetch('https://api.nomoreparties.co/beatfilm-movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return handleResponse(response);
};