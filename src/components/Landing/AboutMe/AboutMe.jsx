import React from 'react';
import './AboutMe.css';
import author from '../../../images/1_3.jpg';
import Portfolio from '../Portfolio/Portfolio';
import { Link } from "react-router-dom";

const ABOUT_ME_TEXT = "Я родилась и выросла на юге. Люблю сложную музыку, больших собак и итальянский язык. Однажды друг посоветовал мне попробывать себя в программировании, я начала понемногу заниматься сама, а потом получила грант на учебу в ЯндексПрактикуме. Спустя 10 месяцев учебы могу сказать, что проект, который Вы видите, вероятно, последний, потому что большего выгорания чем сейчас я еще не чувствовала.";
const ABOUT_ME_LINK = "https://github.com/mrn1009"
const ABOUT_ME_STATUS = "Фронтенд-разработчик, 33 года"

function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="container">
       <h2 className="title">Студент</h2>
        <div className="aboutMe-container">
          <div className="aboutMe-info">
            <h3 className="aboutMe-name">Марина</h3>
            <p className="aboutMe-status">{ABOUT_ME_STATUS}</p>
            <p className="aboutMe-text">{ABOUT_ME_TEXT}</p>
            <Link href={ABOUT_ME_LINK} className="aboutMe-link" rel="noreferrer" target="_blank">Github</Link>
          </div>
          <img src={author} className="aboutMe-photo" alt="Фото с изображением автора из личного архива"/>
        </div>
        <Portfolio />
      </div>
    </section>
  );
}

export default AboutMe;