import React ,{useState,useEffect}from "react";
import { RequestForm } from "./form";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const FundingReq = (props) => {
  const [screenBehaviour, setscreenBehaviour] = useState("register")
  let location = useLocation();

  useEffect(() => {
    if(location.state?.behaviour === "inquire"){
      setscreenBehaviour("inquire")
      // setreqStatus("pending")//for now 
    }else{
      setscreenBehaviour("register")

    }
  
  }, [location.state])
  
  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col sm={8} md={7} lg={6}>
          <RequestForm screenBehaviour={screenBehaviour}/>
        </Col>
      </Row>
    </Container>
  );
};

