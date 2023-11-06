import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: "Статичный сайт",
    link: "https://mrn1009.github.io/how-to-learn/",
  },
  {
    title: "Адаптивный сайт",
    link: "https://mrn1009.github.io/russian-travel/",
  },
  {
    title: "Одностраничное приложение",
    link: "https://github.com/mrn1009/react-mesto-api-full-gha",
  }
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio-title">Портфолио</h3>
      <ul className="portfolio-menu">
        {projects.map((project, index) => (
          <li className="portfolio-menu_item" key={index}>
            <a className="portfolio-link" href={project.link} rel="noreferrer" target="_blank"> {project.title} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
