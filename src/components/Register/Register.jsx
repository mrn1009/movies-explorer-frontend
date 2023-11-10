import AuthPage from '../AuthPage/AuthPage';
import './Register.css';
import useFormValidation from '../../hooks/useFormValidation';
import FormInput from '../FormInput/FormInput';
import { EMAIL_PATTERN } from '../../utils/constants';

const Register = () => {
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit() {
    // onSubmit(values);
  } 
    
  return (
    <AuthPage 
      type={'register'}
      isValid={isValid}
      onSubmit={handleSubmit}
      // error={error}
    >
      <FormInput
        value={values.name}
        error={errors.name}
        onChange={handleChange}
        name='name'
        title='Имя'
        type='text'
        placeholder="Введите имя"
        required
        minLength={2}
        maxLength={40}
      />
      <FormInput
        value={values.email}
        error={errors.email}
        onChange={handleChange}
        name='email'
        title='E-mail'
        type='email'
        placeholder="Введите email"
        pattern={EMAIL_PATTERN}
        required
      />
      <FormInput
        value={values.password}
        error={errors.password}
        onChange={handleChange}
        name='password'
        title='Пароль'
        type='password'
        placeholder="Введите пароль"
        minLength={6}
        maxLength={40}
        required
      />
    </AuthPage >
  );
}

export default Register;