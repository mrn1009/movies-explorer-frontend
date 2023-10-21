import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="not-found">
      <section className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </section>
      <Link to="/" className="not-found__link">Назад</Link>
    </main>
  );
}

export default NotFound;