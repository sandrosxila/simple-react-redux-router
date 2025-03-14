import { useRef, useState } from 'react';
import styles from './LoginForm.module.css';
import * as Auth from '@/api/auth';
import { login } from '@/features/auth/user';
import { Link, useNavigate } from 'react-router';
import { useAppDispatch } from '@/hooks/redux';

export const LoginForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const [error, setError] = useState<{ message: string } | null>(null);

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailRef.current?.value ?? '';
    const password = passwordRef.current?.value ?? '';

    if(email.trim() === '' || password.trim() === ''){
      setError({ message: 'Please fill email and password fields.' });

      return;
    }
    
    const res = await Auth.signIn(email, password);

    if('error' in res && res.error){
      setError({ message: res.error });

      return;
    }

    setError(null);
    dispatch(login({ id: res.userId, email, fullName: res.fullName }));
    navigate('/');
  };

  return (
    <form className={ styles.form } onSubmit={ onSubmit }>
      <div className={ styles.flexColumn }>
        <label className={ styles.inputLabel }>Email </label>
      </div>
      <div className={ styles.inputForm }>
        <input ref={ emailRef } placeholder="Enter your Email" className={ styles.input } type="email" />
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

      <button className={ styles.buttonSubmit }>Sign In</button>
      <p className={ styles.p }>
        { 'Don\'t have an account?' } <Link className={ styles.span } to={ '/register' }>Sign Up</Link>
      </p>

      {
        error && (
          <div className={ styles.error }>
            { error.message }
          </div>
        )
      }
    </form>
  );
};
