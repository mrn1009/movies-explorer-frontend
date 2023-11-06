import React from 'react';
import '../Techs/Techs.css';

const techsMenu = [
  'HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'
];

function Techs() {
  return (
    <section className="techs">
      <div className="container">
        <h2 className="title">Технологии</h2>
        <h3 className="techs-title">7 технологий</h3>
        <p className="techs-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs-menu">
          {techsMenu.map((tech, index) => (
            <li className="menu-item" key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Techs;
