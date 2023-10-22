import './Footer.css';
import { useLocation } from "react-router-dom";

const Footer = () => {
  const path = useLocation().pathname;
  const classLocal = path === '/' || path === '/movies' || path === '/saved-movies' ? '' : 'footer_hidden';
  
  return (
    <footer className={"footer " + classLocal}>
      <div className="container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <p className="footer__copy">&copy; 2023</p>
          <ul className="footer__links-list">
            <li><a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
            <li><a className="footer__link" href="https://github.com/" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;