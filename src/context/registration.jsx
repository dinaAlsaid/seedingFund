// import React, { useState, useEffect } from 'react';
// import dotenv from 'dotenv';
// import jwt from 'jsonwebtoken';
// import superagent from 'superagent';
// import cookie from 'react-cookies';
// dotenv.config();
// const LOGIN = process.env.LOGIN || `https://course-fellows.herokuapp.com/signin`;
// const SIGNUP = process.env.SIGNUP || `https://course-fellows.herokuapp.com/signup`;
// const SECRET = process.env.JWT_SECRET || 'mysecret';


// export const RegisterContext = React.createContext();
// function RegisterProvider(props) {
//   const [loggedIn, setloggedIn] = useState(false);
//   const [user, setuser] = useState({});
//   const [token, setToken] = useState('');


//   const validateToken = token => {
//     try {
//       const user = jwt.verify(token, SECRET);
//       // const user = jwt.decode(token);
//       setLoginState(true, token, user);
//     } catch (e) {
//       console.log(`TOKEN validation ERROR ${e.message}`);
//       setLoginState(false, null, {});
//     }
//   };
//   const setLoginState = (loggedIn, token, user) => {
//     cookie.save('auth', token);
//     setToken(token);
//     setuser(user);
//     setloggedIn(loggedIn);
//     setToken(token);
//   };
//   const login = async (username, password) => {
//     try {
//       const response = await superagent
//         .post(`${LOGIN}`)
//         .set('authorization', `Basic ${btoa(`${username}:${password}`)}`);
//       validateToken(response.body.token);
//       console.log(response.body.token);
//     } catch (e) {
//       console.error(e.message);
//     }
//   };

//   const signup = async (username, password) => {
//     try {
//       const response = await superagent.post(`${SIGNUP}`).send({ username, password });
//       validateToken(response.body.token);
//     } catch (e) {
//       console.error(e.message);
//     }
//   };

//   const logout = () => {
//     setLoginState(false, null, {});
//     cookie.remove('auth');
//   };
//   useEffect(() => {
//     const token = cookie.load('auth');
//     validateToken(token);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const state = {
//     loggedIn,
//     setloggedIn,
//     user,
//     setuser,
//     login,
//     logout,
//     signup,
//     token,
//   };

//   return <RegisterContext.Provider value={state}>{props.children}</RegisterContext.Provider>;
// }
// export default RegisterProvider;