import React from 'react';
import './Promo.css';
import landinglogo from '../../../images/landing-promo.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-container">
          <div>
            <h1 className="promo-title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <p className="promo-text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
            <a className="promo-button" href="#aboutProject">Узнать больше</a>
          </div>
          <img src={landinglogo} className="promo-image" alt="Изображение логотипа"/>
        </div>
      </div>
    </section>
  );
}

export default Promo;