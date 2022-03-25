import React, { useState, useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoginForm, SignupForm } from "./form";
import "./style.css";
import { RegisterContext } from "../../context/registration";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const registration = useContext(RegisterContext);
  const navigate = useNavigate();

  const [isNewUser, setisNewUser] = useState(true);

  useEffect(()=>{
    if(registration.loggedIn){
      navigate("/");
    }

  },[registration.loggedIn])

  const login = (data) => {
    registration.login(data);

  };

  const signup = (data) => {
    registration.signup(data);
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        {isNewUser ? (
          <Col md={6} lg={4} className="border p-4">
            <LoginForm onSubmit={login} />
          </Col>
        ) : (
          <Col md={6} lg={4} className="border p-4">
            <SignupForm onSubmit={signup} />
          </Col>
        )}
      </Row>
      <Row>
        <span
          className="link text-center"
          onClick={() => {
            setisNewUser(!isNewUser);
          }}
        >
          {!isNewUser ? "Already a user" : "Sign Up"}
        </span>
      </Row>
    </Container>
  );
};
