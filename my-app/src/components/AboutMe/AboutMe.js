import './AboutMe.css'
import React from "react";
import photo from '../../images/1_3.jpg';

function AboutMe() {
    return (
      <section className="aboutMe">
  
        <h2 className="aboutMe__title">Студент</h2>
  
        <div className="aboutMe__box">
          <div className="aboutMe__leftPart">
            <h3 className="aboutMe__name">Марина</h3>
            <p className="aboutMe__about">Фронтенд-разработчик, 32 года</p>
            <p className="aboutMe__text">Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании новых предложений! Практический опыт показывает, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для модели развития.</p>
            <a className="aboutMe__link" href="https://github.com/mrn1009" target="_blank" rel="noreferrer">Github</a>
          </div>
  
          <div>
            <img className="aboutMe__photo" src={photo} alt="Фотография студенки Яндекс Практикума"/>
          </div>
        </div>
  
      </section>
    )
  }
  
  export default AboutMe;