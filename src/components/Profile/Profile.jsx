import './Profile.css';
import { useState, useContext, useEffect  } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormValidation from '../../hooks/useFormValidation';
import { EMAIL_PATTERN } from '../../utils/constants';

const Profile = ({ logout, onSubmit, error, successMessage, isLoader }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } = useFormValidation();
  const [inEditMode, setInEditMode] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
  }

  function handleEditClick() {
    setInEditMode(true);
  }

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
      setTimeout(() => setInEditMode(false), 3000);
    }
  }, [currentUser, resetForm]);

  const requireValidity = (!isValid || isLoader || (currentUser.name === values.name && currentUser.email === values.email));
 
  return (
    <main className='profile'>
      <section className='profile__inner'>
        <h1 className="profile__title">Привет, {currentUser && currentUser.name}!</h1>
        <form className="profile__form" name="profile-form" noValidate onSubmit={handleSubmit}>
          <fieldset className='profile__form-fields'>
            <div className="profile__field">
              <label className="profile__input-label">
                Имя
              </label>
              <input
                className={`profile__input ${errors.name && 'profile__input_error'}`}
                name="name"
                type="text"
                placeholder="Имя"
                value={values.name || ''}
                onChange={handleChange}
                minLength={3}
                maxLength={40}
                disabled={!inEditMode}
                required
              ></input>
              <span className="profile__input-error-message">{errors.name || ''}</span>
            </div>
            <div className="profile__field">
              <label className="profile__input-label">
                E-mail
              </label>
              <input
                className={`profile__input ${errors.email && 'profile__input_error'}`}
                name="email"
                type="email"
                placeholder="Email"
                value={values.email || ''}
                onChange={handleChange}
                pattern={EMAIL_PATTERN}
                disabled={!inEditMode}
                required
              ></input>
              <span className="profile__input-error-message">{errors.email || ''}</span>
            </div>
          </fieldset>
          <div className="profile__buttons">
            <p className={`profile__message ${error && 'profile__message_error'}`}>
              {successMessage || error}
            </p>
            {inEditMode ? (
              <button className="profile__save-button" type="submit" disabled={requireValidity}>
                Сохранить
              </button>
            ) : (
              <>
                <button className="profile__edit-button" type="button" onClick={handleEditClick}>
                  Редактировать
                </button>
                <button className="profile__exit-button" type="button" onClick={logout}>
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

export default Profile;