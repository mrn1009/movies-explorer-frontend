import React, { useCallback } from 'react';
import { Link } from "react-router-dom";
import Logo from '../Landing/Logo/Logo';
import './Auth.css';

const Auth = ({ onSubmit, isValid, children, type, isLoading, error }) => {
  const getTitle = () => {
    if (type === 'register') {
      return 'Добро пожаловать!';
    } else {
      return 'Рады видеть!';
    }
  };

  const getButtonText = () => {
    if (type === 'register') {
      return 'Зарегистрироваться';
    } else {
      return 'Войти';
    }
  };

  const getLinkPath = () => {
    if (type === 'register') {
      return '/signin';
    } else {
      return '/signup';
    }
  };

  const getLinkText = () => {
    if (type === 'register') {
      return 'Войти';
    } else {
      return 'Регистрация';
    }
  };

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onSubmit();
  }, [onSubmit]);

  return (
    <main className="auth">
      <section className="auth-container">
        <Logo />
        <h1 className="auth-title">{getTitle()}</h1>
        <form name={type} className="auth-form" onSubmit={handleSubmit}>
          <fieldset className='auth-fields'>{children}</fieldset>
          <div className="auth-button">
            <span className="auth-error">{error}</span>
            <button className="form-button" type="submit" disabled={!isValid || isLoading}>{getButtonText()}</button>
          </div>
        </form>
        <div className="auth-caption_container">
          <span className="auth-caption">{type === 'register' ? 'Уже зарегистрированы?' : 'Ещё не зарегистрированы?'}</span>
          <Link to={getLinkPath()} className="auth-link">{getLinkText()}</Link>
        </div>
      </section>
    </main>
  );
}

export default Auth;
