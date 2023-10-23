import './Login.css';
import AuthPage from '../AuthPage/AuthPage';
import useFormValidation from '../../hooks/useFormValidation';
import FormInput from '../FormInput/FormInput';
import { EMAIL_PATTERN } from '../../utils/constants';

const Login = ({ onSubmit, error, isLoader }) => {
  const { values, errors, isValid, handleChange } = useFormValidation();

  function handleSubmit() {
    onSubmit(values);
  }
  
  return (
    <AuthPage
      type={'login'}
      onSubmit={handleSubmit}
      isValid={isValid}
      error={error}
      isLoader={isLoader}
    >
      <FormInput
        value={values.email || ''}
        error={errors.email || ''}
        onChange={handleChange}
        name='email'
        title='E-mail'
        type='email'
        placeholder="Введите email"
        pattern={EMAIL_PATTERN}
        required
      />
      <FormInput
        value={values.password || ''}
        error={errors.password || ''}
        onChange={handleChange}
        name='password'
        title='Пароль'
        type='password'
        placeholder="Введите пароль"
        minLength={6}
        maxLength={40}
        required
      />
    </AuthPage>
  );
}

export default Login;