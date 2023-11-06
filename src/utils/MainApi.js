class MainApi {
  constructor({ url, headers }) {
    this._baseUrl = url;
    this._headers = headers;
  }

  async _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    const err = await res.json();
    return Promise.reject(err);
  }

  async _handleRequest(url, method = 'GET', body) {
    const options = {
      method,
      credentials: 'include',
      headers: this._headers
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(`${this._baseUrl}${url}`, options);
    return this._checkResponse(res);
  }

  register(name, email, password) {
    return this._handleRequest('/signup', 'POST', { name, email, password });
  }

  login(email, password) {
    return this._handleRequest('/signin', 'POST', { email, password });
  }

  getProfile() {
    return this._handleRequest('/users/me');
  }

  updateUser(name, email) {
    return this._handleRequest('/users/me', 'PATCH', { name, email });
  }

  getFavoriteMovies() {
    return this._handleRequest('/movies');
  }

  saveMovie(data) {
    return this._handleRequest('/movies', 'POST', data);
  }

  deleteMovie(movieId) {
    return this._handleRequest(`/movies/${movieId}`, 'DELETE');
  }

  logout() {
    return this._handleRequest('/signout');
  }
}

const mainApi = new MainApi({
  url: 'https://api.movies.mrn1009.nomoredomainsrocks.ru',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;

