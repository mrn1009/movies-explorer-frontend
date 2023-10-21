import './Profile.css';
import { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [inEditMode, setInEditMode] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleEditClick() {
    setInEditMode(true);
  }

  function handleProfileSubmit(e) {
    e.preventDefault();
    if (!email || !name) {
      setError('Имя и email не могут быть пустыми');
      return;
    }

    setError('');
  }
  return (
    <main className='profile'>
      <section className='profile__inner'>
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form" name="profile-form" noValidate onSubmit={handleProfileSubmit}>
          <fieldset className='profile__form-fields'>
            <label className="profile__input-label">
              Имя
              <input
                className="profile__input"
                type="text"
                placeholder="Имя"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
                disabled={!inEditMode}
              ></input>
            </label>
            <label className="profile__input-label">
              E-mail
              <input
                className="profile__input"
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                disabled={!inEditMode}
              ></input>
            </label>
          </fieldset>
          <div className="profile__buttons">
            <p className="profile__message">{error}</p>
            {inEditMode ? (
              <button
                className="profile__save-button"
                type="submit"
                disabled={error !== ''}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className="profile__edit-button"
                  type="button"
                  onClick={handleEditClick}
                >
                  Редактировать
                </button>
                <button
                  className="profile__exit-button"
                  type="button"
                >
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