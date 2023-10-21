import './FormButton.css';

const FormButton = ({ children, ...props }) => {
  return <button className="form-button" type="submit" {...props}>{children}</button>
}

export default FormButton;