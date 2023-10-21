import './Header.css';
import Navigation from '../Navigation/Navigation.jsx';
import Logo from '../Logo/Logo.jsx';
import { useLocation } from 'react-router-dom';
import NavAuth from '../NavAuth/NavAuth';


const Header = ({ loggedIn }) => {
  const path = useLocation().pathname;

  const classLocal = path === '/' ? 'header_type_landing' 
  : path === "/movies" || path === "/saved-movies" || path === '/profile'
  ? '' : 'header_hidden';

  return (
    <header className={"header " + classLocal}>
      <div className="container">
        <div className="header__container">
          <Logo />
          {!loggedIn ? <NavAuth /> : <Navigation path={path} />}
        </div>
      </div>
    </header>
  );
}

export default Header;