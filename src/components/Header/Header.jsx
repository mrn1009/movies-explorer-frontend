import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import Logo from '../Landing/Logo/Logo.jsx';
import { useLocation } from 'react-router-dom';
import NavTab from '../Landing/NavTab/NavTab.jsx';

const Header = ({ loggedIn }) => {
  const path = useLocation().pathname;
  const isLandingPage = path === '/';
  const isMoviesPage = path === '/movies' || path === '/saved-movies' || path === '/profile';
  const headerClass = `header ${isLandingPage ? 'header-landing' : isMoviesPage ? '' : 'header-hide'}`;

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="header-container">
          <Logo />
          {!loggedIn ? <NavTab /> : <Navigation path={path} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
