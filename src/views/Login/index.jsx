import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LoginForm } from "./form";

export const Login = () => {
  // const [loginData, setloginData] = useState({});

  return (
    <Container>
      <Row>
        <Col md={6} lg={4}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
};
