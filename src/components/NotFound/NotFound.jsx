import './NotFound.css';

const NotFound = ({ goBack }) => {
  return (
    <main className="not-found">
      <section className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
      </section>
      <button className="not-found__button" onClick={goBack}>Назад</button>
    </main>
  );
}

export default NotFound;