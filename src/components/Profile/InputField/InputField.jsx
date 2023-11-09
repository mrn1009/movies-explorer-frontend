import React from 'react';
import './InputField.css';

const InputField = ({ 
  label, 
  name, 
  type, 
  placeholder, 
  value, 
  onChange, 
  error,
  disabled, 
  required, 
  minLength, 
  maxLength, 
  pattern }) => {

  return (
    <div className="field">
      <label className="input-label">{label}</label>
      <input
        className={`input ${error && 'input_error'}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
      />
      <span className="input__error-message">{error || ''}</span>
    </div>
  );
};

export default InputField;