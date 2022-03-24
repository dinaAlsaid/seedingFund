import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoginForm, SignupForm } from "./form";
import "./style.css"

export const Login = () => {
  const [isNewUser, setisNewUser] = useState(true);

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        {isNewUser ? (
          <Col md={6} lg={4} className="border p-4">
            <LoginForm />
          </Col>
        ) : (
          <Col md={6} lg={4} className="border p-4">
            <SignupForm />
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
