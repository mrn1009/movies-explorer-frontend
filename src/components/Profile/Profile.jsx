import React, { useState, useContext, useEffect } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import InputField from './InputField/InputField';
import './Profile.css';

const useProfileEffect = (currentUser, resetForm, setInEditMode) => {
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
      setTimeout(() => setInEditMode(false), 2000);
    }
  }, [currentUser, resetForm, setInEditMode]);
};

const Profile = ({ singout, onSubmit, error, successMessage, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const [inEditMode, setInEditMode] = useState(false);
  const {
    isValid,
    resetForm,
    values,
    handleChange,
    errors
  } = useFormValidation()

  const isSaveButtonDisabled = !isValid || isLoading || (currentUser.name === values.name && currentUser.email === values.email);

  useProfileEffect(currentUser, resetForm, setInEditMode);

  return (
    <main className='profile'>
      <section className='profile-container'>
        <h1 className="profile-title">Привет, {currentUser?.name}!</h1>
        <form className="profile-form" noValidate onSubmit={(e) => { e.preventDefault(); onSubmit(values); }}>
          <fieldset className='profile-fields'>
            <InputField
              label="Имя"
              name="name"
              type="text"
              placeholder="Имя"
              required
              minLength={2}
              maxLength={30}
              value={values.name || ''}
              onChange={handleChange}
              error={errors.name}
              disabled={!inEditMode}
            />
            <InputField
              label="E-mail"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={values.email || ''}
              onChange={handleChange}
              error={errors.email}
              disabled={!inEditMode}
            />
          </fieldset>
          <div className="profile-buttons">
            <p className={`profile-message ${error && 'profile-error'}`}>{successMessage || error}</p>
            {inEditMode ? (
            <button className="profile-save" type="submit" disabled={isSaveButtonDisabled}>Сохранить</button>
            ) : (
              <>
                <button className="profile-edit" type="button" onClick={() => setInEditMode(true)}>Редактировать</button>
                <button className="profile-exit" type="button" onClick={singout}>Выйти из аккаунта</button>
              </>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;
