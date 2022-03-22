import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SignupForm } from "./form";

export const Signup = () => {
  return (
    <Container>
      <Row>
        <Col md={6} lg={4}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};
