import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
import photo from '../../images/1_3.jpg';
import Title from '../Title/Title';

const AboutMe = () => {

  return (

    <section className="about-me">
      <div className="container">
        <Title>Студент</Title>
        <div className="about-me__container">
          <div className="about-me__info">
            <h3 className="about-me__name">Марина</h3>
            <p className="about-me__status">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__text">
              Я родилась и живу в Саратове, закончила факультет экономики СГУ. У меня есть муж и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить. С 2015 года работала в компании «СКБ Контур». После курса по веб-разработке начала заниматься фриланс-заказами и ушла с постоянной работы.
            </p>
            <a className="about-me__link" href="https://github.com/mrn1009" target="_blank" rel="noreferrer">Github</a>
          </div>
          <img className="about-me__photo" src={photo} alt="Фото студентки Яндекс Практикума"/>
        </div>
        <Portfolio />
      </div>
    </section>
    
  );
}

export default AboutMe;