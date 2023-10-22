import './FormInput.css';

const FormInput = ({ title, name, error, value = '', ...props }) => {
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={name}>
        {title}
      </label>
      <input
        className={`form-input__input ${error ? `form-input__input_error` : ''}`}
        id={name}
        name={name}
        value={value}
        {...props}
      />
      <span className="form-input__error-message">
        {error}
      </span>
    </div>
  )
}

export default FormInput;