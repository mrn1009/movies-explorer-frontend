import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import Popup from '../Popup/Popup';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { SUCCESS_PROFILE_MESSAGE } from '../../utils/constants';

function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [serverError, setServerError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    authUser();
  }, []);

  const handleRequestError = (err) => {
    setIsPopupOpen(true);
    setServerError(err.message);
    setErrorMessage(err.message);
    setTimeout(() => setIsPopupOpen(false), 3000);
    setTimeout(() => setServerError(''), 3000);
  };

  const goBack = () => {
    navigate(-1, { replace: true });
  }

  const handleLogin = async ({ email, password }) => {
    setIsLoader(true);
    try {
      await mainApi.login(email, password);
      const user = await mainApi.getProfile();
      setCurrentUser(user);

      setLoggedIn(true);
      navigate('/movies', { replace: true });
    } catch (err) {
      handleRequestError(err);
    } finally {
      setIsLoader(false);
    }
  }

  const handleRegister = async ({ name, email, password }) => {
    setIsLoader(true);
    try {
      await mainApi.register(name, email, password);
      await handleLogin({ email, password });
      navigate('/movies', { replace: true });
    } catch (err) {
      handleRequestError(err);
    } finally {
      setIsLoader(false);
    }
  }

  const handleLogout = async () => {
    setIsLoader(true);
    try {
      await mainApi.logOut();
      setCurrentUser(null);
      setLoggedIn(false);

      localStorage.clear();
      sessionStorage.clear();
      navigate('/', { replace: true });
    } catch (err) {
      handleRequestError(err);
    } finally {
      setIsLoader(false);
    }
  }

  const authUser = async () => {
    setIsLoader(true);
    try {
      const user = await mainApi.getProfile();
      if (user.email) {
        setLoggedIn(true);
        setCurrentUser(user);
      }
    } catch (err) {
      if (err instanceof Error) {
        setServerError(err);
      }
    } finally {
      setIsLoader(false);
    }
  }

  const handleUpdateProfile = async ({ name, email }) => {
    setIsLoader(true);
    try {
      const user = await mainApi.updateProfile(name, email);
      setCurrentUser(user);
      setSuccessMessage(SUCCESS_PROFILE_MESSAGE);
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      handleRequestError(err);
    } finally {
      setIsLoader(false);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={
            <ProtectedRoute
              Component={Movies}
              loggedIn={loggedIn}
              isLoader={isLoader}
            />
          } />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              Component={SavedMovies}
              loggedIn={loggedIn}
              isLoader={isLoader}
            />
          } />
          <Route path="/profile" element={
            <ProtectedRoute
              Component={Profile}
              loggedIn={loggedIn}
              logout={handleLogout}
              onSubmit={handleUpdateProfile}
              error={serverError}
              successMessage={successMessage}
              isLoader={isLoader}
            />
          } />
          <Route path="/signup" element={
            <Register
              onSubmit={handleRegister}
              error={serverError}
              isLoader={isLoader}
            />
          } />
          <Route path="/signin" element={
            <Login
              onSubmit={handleLogin}
              error={serverError}
              isLoader={isLoader}
            />
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Popup isPopupOpen={isPopupOpen}>{errorMessage}</Popup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;