import { useRef, useState } from "react";
import styles from "./LoginForm.module.css";
import * as Auth from '/src/api/auth';
import { login } from '/src/features/auth/user';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

export const LoginForm = () => {
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if(email === '' || password === ''){
      setError({ message: "Please fill email and password fields." });

      return;
    }
    
    const res = await Auth.signIn(emailRef.current.value, passwordRef.current.value);

    if("error" in res){
      setError({ message: res.error });

      return;
    }

    setError(null);
    dispatch(login({ id: res.userId, email, fullName: res.fullName }));
    navigate("/");
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.flexColumn}>
        <label className={styles.inputLabel}>Email </label>
      </div>
      <div className={styles.inputForm}>
        <input ref={emailRef} placeholder="Enter your Email" className={styles.input} type="email" />
      </div>

      <div className={styles.flexColumn}>
        <label className={styles.inputLabel}>Password </label>
      </div>
      <div className={styles.inputForm}>
        <input
          ref={passwordRef}
          placeholder="Enter your Password"
          className={styles.input}
          type="password"
        />
      </div>

      <button className={styles.buttonSubmit}>Sign In</button>
      <p className={styles.p}>
        {"Don't have an account?"} <Link className={styles.span} to={"/register"}>Sign Up</Link>
      </p>

      {
        error && (
          <div className={styles.error}>
            {error.message}
          </div>
        )
      }
    </form>
  );
};
