import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { PROFILE_SUCCESS_MESSAGE , PROFILE_ERROR_EMAIL_MESSAGE } from '../../utils/constants';

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const checkLoggedInStatus = () => {
      mainApi
        .getProfile()
        .then((user) => {
          if (user) {
            setLoggedIn(true);
            setUser(user);
            if (location.pathname === '/signin' || location.pathname === '/signup') {
              navigate('/movies');
            }
          } else {
            setLoggedIn(false);
          }
        })
        .catch((err) => {
          if (err instanceof Error) {
            setError(err.message);
            setLoggedIn(false);
          }
        })
        .finally(() => {
          setIsPageLoaded(true);
        });
    };

    checkLoggedInStatus();
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (loggedIn) {
      fetchFavoriteMovies();
    }
  }, [loggedIn]);

  const handleReqError = (err) => {
    setError(err.message);
    setTimeout(() => {
      setError('');
    }, 2000);
  };

  const handleRegister = ({ name, email, password }) => {
    setIsLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => handleLogin({ email, password }))
      .then(() => navigate('/movies', { replace: true }))
      .catch((err) => {
        handleReqError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then(() => mainApi.getProfile())
      .then((user) => {
        setUser(user);
        setLoggedIn(true);  
        navigate('/movies', { replace: true });
      })
      .catch((err) => {
        handleReqError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleUpdateUser = ({ name, email }) => {
    setIsLoading(true);
    mainApi
      .updateUser(name, email)
      .then((user) => {
        setUser(user);
        setSuccessMessage(PROFILE_SUCCESS_MESSAGE);
        setTimeout(() => setSuccessMessage(''), 2000);
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          setError(PROFILE_ERROR_EMAIL_MESSAGE);
        } else {
          handleReqError(error);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const fetchFavoriteMovies = () => {
    setIsLoading(true);
    mainApi
      .getFavoriteMovies()
      .then((savedMovies) => {
        setFavoriteMovies(savedMovies);
      })
      .catch((err) => {
        handleReqError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleMovieLike = (movie) => {
    setIsLoading(true);
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setFavoriteMovies((previousMovies) => [savedMovie, ...previousMovies]);
      })
      .catch((err) => {
        handleReqError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleMovieDelete = (movie) => {
    setIsLoading(true);
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        setFavoriteMovies((previousMovies) =>
        previousMovies.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        handleReqError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    setIsLoading(true);
    mainApi
      .logout()
      .then(() => {
        localStorage.clear();
        sessionStorage.clear();
        setLoggedIn(false);
        setUser(null);
        navigate('/', { replace: true });
      })
      .catch((err) => {
        handleReqError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoBack = () => {
    setIsLoading(true);
    navigate(-1, { replace: true });
  };

  if (!isPageLoaded) {
    return <Preloader isOpen={isLoading} />;
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={user} >
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/signup" element={<Register isLoading={isLoading} onSubmit={handleRegister}error={error}/>} />
          <Route path="/signin" element={<Login isLoading={isLoading} onSubmit={handleLogin} error={error}/>} />

          <Route path="/movies"
            element={
              <ProtectedRoute
                isLoading={isLoading}
                loggedIn={loggedIn}
                onCardDelete={handleMovieDelete}
                onCardLike={handleMovieLike}
                favoriteMovies={favoriteMovies}
                component={Movies} /> } />
          <Route path="/saved-movies"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                isLoading={isLoading}
                favoriteMovies={favoriteMovies}
                onCardDelete={handleMovieDelete}
                component={SavedMovies} />}/>
          <Route path="/profile"
            element={
              <ProtectedRoute
                loggedIn={loggedIn}
                singout={handleLogout}
                onSubmit={handleUpdateUser}
                successMessage={successMessage}
                isLoading={isLoading}
                error={error}
                component={Profile}/>}/>
          <Route path="*" element={<NotFoundPage goBack={handleGoBack}/>}/>
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
