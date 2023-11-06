import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab-list">
        <li><Link to="/signup" className="navtab-link navtab-signup">Регистрация</Link></li>
        <li><Link to="/signin" className="navtab-link navtab-signin">Войти</Link></li>
      </ul>
    </nav>
  );
}

export default NavTab;
