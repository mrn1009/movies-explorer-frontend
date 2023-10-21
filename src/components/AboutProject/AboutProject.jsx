import Title from '../Title/Title';
import './AboutProject.css';

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <div className="container">
        <Title>О проекте</Title>
        
        <div className="about-project__info">
          <div className="about-project__info-item">
            <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>

          <div className="about-project__info-item">
            <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>

        <div className="about-project__time">
          <p className="about-project__time-header about-project__time-header_accent">1 неделя</p>
          <p className="about-project__time-header">4 недели</p>
          <p className="about-project__time-side">Back-end</p>
          <p className="about-project__time-side">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;