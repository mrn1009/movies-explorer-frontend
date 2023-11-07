import React from 'react';
import './AboutMe.css';
import author from '../../../images/1_3.jpg';
import Portfolio from '../Portfolio/Portfolio';
import { Link } from "react-router-dom";
import { ABOUT_ME_STATUS, ABOUT_ME_TEXT, ABOUT_ME_LINK } from '../../../utils/constants'

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