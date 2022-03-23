import React, { useState, useEffect } from "react";
import jwt from "jwt-decode";
import axios from "axios";
import cookie from "react-cookies";

export const RegisterContext = React.createContext();
function RegisterProvider(props) {
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setuser] = useState({});
  const [token, setToken] = useState("");

  const validateToken = (token) => {
    try {
      const user = jwt(token);

      console.log(user);
      setLoginState(true, token, user);
    } catch (e) {
      console.log(`TOKEN validation ERROR ${e.message}`);
      setLoginState(false, null, {});
    }
  };

  const setLoginState = (loggedIn, token, user) => {
    cookie.save("auth", token);
    setToken(token);
    setuser(user);
    setloggedIn(loggedIn);
    setToken(token);
  };

  //   const login = async (username, password) => {
  //     try {
  //       const response = await axios
  //         .post(`https://auth-server-amman-d5.herokuapp.com/signin`)
  //         .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
  //       validateToken(response.body.token);
  //       console.log(response.body.token);
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   };

  const signup = async (username, password) => {
    try {
      const response = await axios({
        method: "post",
        baseURL: `http://localhost:4000/signup`,
        data: { username, password },
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      validateToken(response.body.token);
    } catch (e) {
      console.error(e.message);
    }
  };

  //   const logout = () => {
  //     setLoginState(false, null, {});
  //     cookie.remove('auth');
  //   };
  //   useEffect(() => {
  //     const token = cookie.load('auth');
  //     validateToken(token);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  const state = {
    loggedIn,
    setloggedIn,
    user,
    setuser,
    // login,
    // logout,
    signup,
    token,
  };

  return <RegisterContext.Provider value={state}>{props.children}</RegisterContext.Provider>;
}
export default RegisterProvider;
