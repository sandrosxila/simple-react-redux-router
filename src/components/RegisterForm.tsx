import { useRef, useState } from 'react';
import styles from './LoginForm.module.css';
import * as Auth from '@/api/auth';
import { login } from '@/features/auth/user';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '@/hooks/redux';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const passwordRepRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const [error, setError] = useState<{ message: string } | null>(null);

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fullName = fullNameRef.current?.value ?? '';
    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';
    const repeatedPassword = passwordRepRef.current?.value ?? '';

    if(fullName.trim() === '' || email.trim() === '' || password.trim() === '' || repeatedPassword.trim() === '') {
      setError({ message: 'Please fill all fields' });
      return;
    }

    if(password !== repeatedPassword) {
      setError({ message: 'Passwords doesn\'t match' });
      return;
    }

    const res = await Auth.signUp(fullName, email, password);

    if('error' in res && res.error){
      setError({ message: res.error });

      return;
    }

    setError(null);
    dispatch(login({ id: res.userId, email, fullName }));
    navigate('/');
  };

  return (
    <form className={ styles.form } onSubmit={ onSubmit }>
      <div className={ styles.flexColumn }>
        <label className={ styles.inputLabel }>Full Name </label>
      </div>
      <div className={ styles.inputForm }>
        <input
          ref={ fullNameRef }
          placeholder="Enter your Full Name"
          className={ styles.input }
          type="text"
        />
      </div>

      <div className={ styles.flexColumn }>
        <label className={ styles.inputLabel }>Email </label>
      </div>
      <div className={ styles.inputForm }>
        <input
          ref={ emailRef }
          placeholder="Enter your Email"
          className={ styles.input }
          type="email"
        />
      </div>

      <div className={ styles.flexColumn }>
        <label className={ styles.inputLabel }>Password </label>
      </div>
      <div className={ styles.inputForm }>
        <input
          ref={ passwordRef }
          placeholder="Enter your Password"
          className={ styles.input }
          type="password"
        />
      </div>

      <div className={ styles.flexColumn }>
        <label className={ styles.inputLabel }>Repeat Password </label>
      </div>
      <div className={ styles.inputForm }>
        <input
          ref={ passwordRepRef }
          placeholder="Repeat Entered Password"
          className={ styles.input }
          type="password"
        />
      </div>

      <button className={ styles.buttonSubmit }>Sign Up</button>

      { error && <div className={ styles.error }>{ error.message }</div> }
    </form>
  );
};
