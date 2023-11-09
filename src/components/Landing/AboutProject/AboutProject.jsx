import React from 'react';
import './AboutProject.css';

function AboutProject () {
  return (
    <section id="aboutProject" className="aboutProject" >
      <div className="container">
        <h2 className="title">О проекте</h2>
        <div className="aboutProject-info">
          <div>
            <h3 className="aboutProject-title">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h3 className="aboutProject-title">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, успешно защититься.</p>
          </div>
        </div>
        <div className="aboutProject-time">
          <p className="aboutProject-header">1 неделя</p>
          <p className="aboutProject-header">4 недели</p>
          <p className="aboutProject-side">Back-end</p>
          <p className="aboutProject-side">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;