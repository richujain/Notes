import React, { useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();
  const remainingTime = adjExpirationTime - currentTime;
  return remainingTime;
};

const retrieveStoredtoken = () => {
  if (typeof window !== 'undefined') {
    const storedToken = localStorage.getItem("token");
    const storedExpirationDate = localStorage.getItem("expirationTime");
  
    const remainingTime = calculateRemainingTime(storedExpirationDate);
  
    if (remainingTime <= 3600) {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
      return null;
    }
    return {
      token: storedToken,
      duration: remainingTime,
    };
  } else {
    console.log('oombi')
    return
  }
  
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredtoken();
  let initialToken
  if(tokenData){  
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token; // True if string is not empty

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  },[]);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime); //5000
  };

  useEffect(() => {
    if(tokenData){
        console.log(tokenData.duration)
        logoutTimer = setTimeout(logoutHandler, tokenData.duration); //5000
    }
  }, [tokenData, logoutHandler])

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
