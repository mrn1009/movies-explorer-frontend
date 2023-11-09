import React from 'react';
import './Portfolio.css';
import { PROJECTS } from '../../../utils/constants'

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio-title">Портфолио</h3>
      <ul className="portfolio-menu">
        {PROJECTS.map((project, index) => (
          <li className="portfolio-menu_item" key={index}>
            <a className="portfolio-link" href={project.link} rel="noreferrer" target="_blank"> {project.title} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
