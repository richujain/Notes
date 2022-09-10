import { useState, useRef, useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
// import AuthContext from "../../store/auth-context";
// import { useHistory } from "react-router-dom";

function Login() {
  // const history = useHistory()
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    if ((enteredEmail.trim().length === 0) || (enteredPassword.trim().length === 0)) {
      setError(true);
    } else{
      setError(false);
    }
  };
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input ref={emailInputRef} type="email" id="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input ref={passwordInputRef} type="password" id="password" />
        </div>

        <div className={classes.actions}>
          {!isLoading && (
            <Button onClick={submitHandler}>{isLogin ? "Login" : "Create Account"}</Button>
          )}
          {error && <p style={{ color: 'red', marginBottom: -25 }}>Invalid Entry</p>}
          {isLoading && <p>Sending Request...</p>}
          <br />
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
