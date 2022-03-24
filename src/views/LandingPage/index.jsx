import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  let navigate = useNavigate();

  const redirectToPage = (e) => {
    navigate("FundingRequest",{state:{behaviour:e.target.value}});
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col sm={5} md={3} lg={4} className="d-flex justify-content-center">
          <Button key="register" variant="primary" value="register" onClick={redirectToPage}>
            Submit a new Request
          </Button>
        </Col>
        <Col sm={5} md={3} lg={4} className="d-flex justify-content-center">
          <Button key="inquire" variant="primary" value="inquire" onClick={redirectToPage}>
            Request Inquiry
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
