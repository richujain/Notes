import { useState, useRef, useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
// import AuthContext from "../../store/auth-context";
// import { useHistory } from "react-router-dom";

export default function Login() {
  // const history = useHistory()
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  
  const submitHandler = () => {

  }

  const switchAuthModeHandler = () => {

  }
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control}`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
          />
        </div>
        <div
          className={`${classes.control}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <div className={classes.actions}>
        <Button type="submit" className={classes.btn} disabled={true}>
            Login
          </Button>
        </div>
        <div className={classes.actionsForAuthMode}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending Request...</p>}
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
  )
}