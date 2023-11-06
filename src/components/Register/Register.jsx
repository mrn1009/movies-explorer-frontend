import React, { useCallback } from "react";
import Auth from '../Auth/Auth';
import useFormValidation from '../../hooks/useFormValidation';

const Register = ({ isLoading, onSubmit, error }) => {
  const { values, isValid, handleChange, errors } = useFormValidation();

  const handleSubmit = useCallback(() => {
    onSubmit(values);
  }, [onSubmit, values]);
    
  return (
    <Auth onSubmit={handleSubmit} type={'register'} isLoading={isLoading} error={error} isValid={isValid}>
      <div className="formInput">
        <p className="formInput-title" htmlFor="name">Имя</p>
        <input
          className={`formInput-input ${errors.name ? 'formInput-input_error' : ''}`}
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          type="text"
          minLength={2}
          maxLength={30}
          required
          pattern='^[A-Za-zА-Яа-яЁё\\-\\s]+$'
        />
        {errors.name && (
          <span className="formInput-error_message">{errors.name}</span>
        )}
      </div>

      <div className="formInput">
        <p className="formInput-title" htmlFor="email">E-mail</p>
        <input
          className={`formInput-input ${errors.email ? 'formInput-input_error' : ''}`}
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
          type="email"
          required
          pattern='^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}$'
        />
        {errors.email && (
          <span className="formInput-error_message">{errors.email}</span>
        )}
      </div>

      <div className="formInput">
        <p className="formInput-title" htmlFor="password">Пароль</p>
        <input
          className={`formInput-input ${errors.password ? 'formInput-input_error' : ''}`}
          id="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          type="password"
          minLength={6}
          maxLength={40}
          required
        />
        {errors.password && (
          <span className="formInput-error_message">{errors.password}</span>
        )}
      </div>
    </Auth>
  );
}

export default Register;