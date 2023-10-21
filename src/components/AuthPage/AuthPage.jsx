import './AuthPage.css';
import { Link } from "react-router-dom";
import Logo from '../Logo/Logo';
import FormButton from '../FormButton/FormButton';

const AuthPage = ({ children, type, onSubmit, isValid }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  const texts = type === 'register'
    ? {
      title: 'Добро пожаловать!', 
      buttonText: 'Зарегистрироваться',
      linkPath: '/signin',
      linkText: 'Войти',
      formCaption: 'Уже зарегистрированы?'
    } : {
      title: 'Рады видеть!',
      buttonText: 'Войти',
      linkPath: '/signup',
      linkText: 'Регистрация',
      formCaption: 'Ещё не зарегистрированы?'
    };

  return (
    <main className="auth">
      <section className="auth__wrapper">
        <Logo />
        <h1 className="auth__title">{texts.title}</h1>
        <form className="auth__form" name={type} onSubmit={handleSubmit}>
          <fieldset className='auth__form-fields'>
            {children}
          </fieldset>
          <div className="auth__button-wrapper">
            <span className="auth__error-message"></span>
            <FormButton disabled={!isValid}>
              {texts.buttonText}
            </FormButton>
          </div>
        </form>
        <div className="auth__caption-wrapper">
          <span className="auth__caption">
            {texts.formCaption}
          </span>
          <Link className="auth__link" to={texts.linkPath}>{texts.linkText}</Link>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;