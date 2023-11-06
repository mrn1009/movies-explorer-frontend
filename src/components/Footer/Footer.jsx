import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Footer.css';

function Footer() {
  const location = useLocation();
  const { pathname } = location;

  const allowedPaths = ["/", "/movies", "/saved-movies"];

  const shouldShowFooter = allowedPaths.includes(pathname);

  if (!shouldShowFooter) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__container">
          <p className="footer__year">&copy;2023</p>
          <ul className="footer__links">
            <li>
              <Link className="footer__link" href="https://practicum.yandex.ru/"
             rel="noreferrer" target="_blank">Яндекс.Практикум</Link>
            </li>
            <li>
              <Link className="footer__link" href="https://github.com/" 
            rel="noreferrer" target="_blank">Github</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;