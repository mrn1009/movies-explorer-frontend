import './Promo.css';
import promo from '../../images/landing-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo__container">
          <div>
            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a href="#about-project" className="promo__button">Узнать больше</a>
          </div>
          <img className="promo__image" src={promo} alt="Изображение логотипа"/>
        </div>
      </div>
    </section>
  );
}

export default Promo;