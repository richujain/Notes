import { useState, useRef, useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import { useRouter } from "next/router";

// import { useHistory } from "react-router-dom";

function Login() {
  const router = useRouter();

  // const history = useHistory()
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const authCtx = useContext(AuthContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current!.value;
    const enteredPassword = passwordInputRef.current!.value;

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setError(true);
    } else {
      setError(false);
      setIsLoading(true);
      let url;
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDA6naETxeIRxoh0w1rfWc08raU3fQCMck";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDA6naETxeIRxoh0w1rfWc08raU3fQCMck";
      }
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log('then 1')
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            res.json().then((data) => {
              let errorMessage = "Authentication failed!";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }

              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          console.log('then 2')
          const expirationTime = new Date(
            new Date().getTime() + +data.expiresIn * 1000
          );
          console.log('Expiratiom time' + expirationTime)
          console.log('then 4')
          authCtx.login(data.idToken, expirationTime);
          router.push("/AllNotes/");
        })
        .catch((err) => {
          console.log('then 3')
          alert(err.message);
        });
    }
  };
  const switchAuthModeHandler = () => {
    setError(false);
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
            <Button onClick={submitHandler}>
              {isLogin ? "Login" : "Create Account"}
            </Button>
          )}
          {error && (
            <p style={{ color: "red", marginBottom: -25 }}>Invalid Entry</p>
          )}
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
