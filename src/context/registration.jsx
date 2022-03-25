import React, { useState,useEffect } from "react";
import jwt from "jwt-decode";
import axios from "axios";
import cookie from "react-cookies";

export const RegisterContext = React.createContext();
function RegisterProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setuser] = useState({});
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = cookie.load('auth');
    validateToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const validateToken = (token) => {
    try {
      const user = jwt(token);
      setLoginState(true, token, user);
    } catch (e) {
      console.log(`TOKEN validation ERROR ${e.message}`);
      // setLoginState(false, null, {});
    }
  };

  const setLoginState = (loggedIn, token, user) => {
    cookie.save("auth", token);
    setToken(token);
    setuser(user);
    setloggedIn(loggedIn);
    setToken(token);
  };

    const login = async (data) => {
      try {
        const response = await axios({
          method: "post",
          baseURL: `http://localhost:4000/signin`,
          data,
          headers:{'authorization': `Basic ${btoa(`${data.username}:${data.password}`)}`}
        })
        validateToken(response.data.token);
      } catch (e) {
        console.error(e.message);
      }
    };

  const signup = async (data) => {
    try {
      const response = await axios({
        method: "post",
        baseURL: `http://localhost:4000/signup`,
        data,
      });
      validateToken(response.data.token);
    } catch (e) {
      console.error(e.message);
    }
  };

    const logout = () => {
      setLoginState(false, null, {});
      cookie.remove('auth');
    };

  const state = {
    loggedIn,
    setloggedIn,
    user,
    setuser,
    login,
    logout,
    signup,
    token,
  };

  return <RegisterContext.Provider value={state}>{props.children}</RegisterContext.Provider>;
}
export default RegisterProvider;
