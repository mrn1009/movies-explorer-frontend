import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className="search-form" aria-label="Форма поиска">
      <form className="search-form__form">
        <div className="search-form__input-container">
          <input className="search-form__input" type="text" placeholder="Фильм" />
          <button className="search-form__button">
            Поиск
          </button>
        </div>
        <label htmlFor="search-form__short-films" className="search-form__short-films">
          <input type="checkbox" id="search-form__short-films" className="search-form__short-films-checkbox" />
          <div className="search-form__thumb-wrapper">
            <div className="search-form__thumb-inner" />
          </div>
          <span className="search-form__short-films-text">
            Короткометражки
          </span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;