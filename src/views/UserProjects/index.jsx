import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Accordion } from "react-bootstrap";

export const UserProjects = () => {
  const [projects, setprojects] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    //get user projects
    setprojects([])
  }, []);

  const navigateToInquiry = () => {
    navigate("/FundingRequest", { state: { behaviour: "inquire" } });
  };

  return (
    <Container>
      <Row className="mt-5 justify-content-center">
        <Col sm={5} md={3} lg={4}>
        <h2>Your Projects</h2>
          <Accordion>
            {projects.map((item, index) => {
              return (
                <Accordion.Item eventKey={`${index}`} key={item.projectName}>
                  <Accordion.Header>{item.projectName}</Accordion.Header>
                  <Accordion.Body role="button" onClick={navigateToInquiry}>
                    <span>{item.description}</span>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
            {projects.length === 0 && (
              <Accordion.Item eventKey="0">
                <Accordion.Header>No Projects</Accordion.Header>
                <Accordion.Body>Add New projects to View</Accordion.Body>
              </Accordion.Item>
            )}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};
