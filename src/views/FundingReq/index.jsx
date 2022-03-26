import React, { useState, useEffect, useContext } from "react";
import { RequestForm } from "./form";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { RegisterContext } from "../../context/registration";
import axios from "axios";

export const FundingReq = (props) => {
  const registration = useContext(RegisterContext);
  const [screenBehaviour, setscreenBehaviour] = useState("register");

  let location = useLocation();

  useEffect(() => {
    if (location.state?.behaviour === "inquire") {
      setscreenBehaviour("inquire");
      // setreqStatus("pending")//for now
    } else {
      setscreenBehaviour("register");
    }
  }, [location.state]);

  const onSubmit = (data) => {
    console.log(data,registration.token);
    axios({
      method: "post",
      baseURL: `http://localhost:4000/project`,
      data,
      headers: {
        authorization: `bearer ${registration.token}`,
      },
    });
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col sm={8} md={7} lg={6}>
          <RequestForm screenBehaviour={screenBehaviour} onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};
