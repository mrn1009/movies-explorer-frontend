//landing page
export const ABOUT_ME_TEXT = "Я родилась и выросла на юге. Люблю сложную музыку, больших собак и итальянский язык. Однажды друг посоветовал мне попробывать себя в программировании, я начала понемногу заниматься сама, а потом получила грант на учебу в ЯндексПрактикуме. Спустя 10 месяцев учебы могу сказать, что проект, который Вы видите, вероятно, последний, потому что большего выгорания чем сейчас я еще не чувствовала.";
export const ABOUT_ME_LINK = "https://github.com/mrn1009";
export const ABOUT_ME_STATUS = "Фронтенд-разработчик, 33 года";
export const PROJECTS = [
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
export const TECHS_MENU = [
  'HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'
];

//api 
export const API_BASE_URL = 'https://api.movies.mrn1009.nomoredomainsrocks.ru';
export const API_MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

//profile message
export const PROFILE_SUCCESS_MESSAGE = 'Профиль успешно изменен';
export const PROFILE_ERROR_EMAIL_MESSAGE = 'Пользователь с таким email уже существует.';

//movies search errors
export const NOT_FOUND_ERROR_MESSAGE = 'Ничего не найдено';
export const CONNECTION_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

//patterns
export const EMAIL_PATTERN = '^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,6}$';
export const NAME_PATTERN = '^[A-Za-zА-Яа-яЁё\\-\\s]+$';