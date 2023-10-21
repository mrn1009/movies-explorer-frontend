import { useState } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ path }) => {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  function onClickBurger() {
    setIsBurgerOpened(!isBurgerOpened);
  }

  function onClose() {
    setIsBurgerOpened(false);
  }

  function handleCloseByOverlay(e) {
    if (e.target.classList.contains('navigation_state_opened')) {
      onClose();
    }
  }

  const generateClassName = (current) => {
    return `navigation__link ${path === current ? 'navigation__link_active' : ''}`;
  }

  return (
    <div className="navigation">
      <button
        className={`navigation__burger ${isBurgerOpened ? 'navigation__burger_closed' : ''}`}
        type='button'
        onClick={onClickBurger}
      />

      <nav className={`navigation__container navigation_state_${isBurgerOpened ? 'opened' : 'closed'}`} onClick={handleCloseByOverlay}>
        <ul className="navigation__list">
          <li className='navigation__item navigation__item_type_mobile'>
            <NavLink to='/' className={generateClassName('/')}  onClick={onClose}>
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/movies" className={generateClassName('/movies')} onClick={onClose}>
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/saved-movies" className={generateClassName('/saved-movies')} onClick={onClose}>
              Сохранённые фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/profile" className={generateClassName('/profile') + ' navigation__link_type_account'} onClick={onClose}>
              Аккаунт
              <div className={`navigation__link-icon ${path === '/' ? 'navigation__link-icon_landing' : ''}`} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;