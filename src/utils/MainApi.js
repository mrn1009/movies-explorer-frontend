import { BASE_URL } from './constants';

class MainApi {
  constructor({ url, headers }) {
    this._baseUrl = url;
    this._headers = headers;
  }

  async _handleRequest(url, options) {
    const res = await fetch(this._baseUrl + url, options);
    if (!res.ok) {
      const err = await res.json();
      return await Promise.reject(err);
    }
    return await res.json();
  }

  register(name, email, password) {
    return this._handleRequest('/signup', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password })
    })
  }

  login(email, password) {
    return this._handleRequest('/signin', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ email, password })
    })
  }

  logOut() {
    return this._handleRequest('/signout', {
      method: "GET",
      credentials: "include",
      headers: this._headers
    })
  }

  getProfile() {
    return this._handleRequest('/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    });
  }

  updateProfile(name, email) {
    return this._handleRequest('/users/me', {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email })
    });
  }

  getMovies() {
    return this._handleRequest('/movies', {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    });
  }

  saveMovie(data) {
    return this._handleRequest('/movies', {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data)
    });
  }

  deleteMovie(id) {
    return this._handleRequest(`/movies/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    });
  }
}

const mainApi = new MainApi({
  url: BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default mainApi;