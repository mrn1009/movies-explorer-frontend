import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function useBurgerMenu() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  const closeBurger = () => {
    setIsBurgerOpen(false);
  };
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('nav_overlay_opened')) {
      closeBurger();
    }
  };
  return { isBurgerOpen, toggleBurger, closeBurger, handleOverlayClick };
}

function Navigation({ path }) {
  const { isBurgerOpen, toggleBurger, closeBurger, handleOverlayClick } = useBurgerMenu();
  const navClassName = `nav__link ${!isBurgerOpen ? 'nav__link_active' : ''}`;
  const isLandingPage = path === '/';
  const iconClassName = `nav__link-icon ${isLandingPage ? 'nav__link_landing' : ''}`;

  return (
    <div className="nav">
      <button className={`nav__burger ${isBurgerOpen ? 'nav__burger_closed' : ''}`} type='button' onClick={toggleBurger}/>
      <nav className={`nav__container nav_overlay_${isBurgerOpen ? 'opened' : 'closed'}`} onClick={handleOverlayClick}>
        <ul className="nav__menu">
          <li className="nav__menu-item mobile-item">
            <NavLink to='/' onClick={closeBurger} className={navClassName}>Главная</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/movies" onClick={closeBurger} className={navClassName}>Фильмы</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/saved-movies" onClick={closeBurger} className={navClassName}>Сохранённые фильмы</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/profile" onClick={closeBurger} className={`${navClassName} nav__link-account`}>Аккаунт
            <span className={iconClassName} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

