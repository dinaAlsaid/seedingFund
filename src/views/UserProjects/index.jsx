import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import axios from "axios";
import { RegisterContext } from "../../context/registration";

export const UserProjects = () => {
  const [projects, setprojects] = useState([]);
  const navigate = useNavigate();
  const registration = useContext(RegisterContext);

  useEffect(() => {
    //get user projects
    const getProjects = async () => {
      let response = await axios({
        method: "get",
        baseURL: `https://seeding-fund-dina.netlify.app/projects`,
        headers: {
          authorization: `bearer ${registration.token}`,
        },
      });

      setprojects(response.data.data);
    };
    getProjects();
  }, []);//eslint-disable-line

  const navigateToInquiry = (data) => {
    navigate("/FundingRequest", { state: { behaviour: "inquire", data } });
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
                  <Accordion.Body
                    role="button"
                    onClick={() => {
                      navigateToInquiry(item);
                    }}
                  >
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
