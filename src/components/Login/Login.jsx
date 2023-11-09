import React, { useCallback } from "react";
import Auth from '../Auth/Auth';
import useFormValidation from '../../hooks/useFormValidation';
import './Login.css';
import { EMAIL_PATTERN } from '../../utils/constants';

const Login = ({ onSubmit, isLoading, error }) => {
  const { errors, isValid, handleChange,  values} = useFormValidation();

  const handleSubmit = useCallback(() => {
    onSubmit(values);
  }, [onSubmit, values]);
  
  return (
    <Auth type={'login'} isValid={isValid} isLoading={isLoading} onSubmit={handleSubmit} error={error}>
      <div className="formInput">
        <p className="formInput-title" htmlFor="email">E-mail</p>
        <input
          className={`formInput-input ${errors.email ? 'formInput-input_error' : ''}`}
          id="email"
          name="email"
          type="email"
          pattern={EMAIL_PATTERN}
          required
          value={values.email || ''}
          onChange={handleChange}
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
          type="password"
          required
          value={values.password || ''}
          onChange={handleChange}
        />
        {errors.password && (
          <span className="formInput-error_message">{errors.password}</span>
        )}
      </div>
    </Auth>
  );
}

export default Login;
