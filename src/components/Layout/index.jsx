import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../navBar";
import { RegisterContext } from "../../context/registration";
import { useLocation, useNavigate } from "react-router-dom";

export const Layout = (props) => {
  const registerContext = useContext(RegisterContext);
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (!registerContext.loggedIn && location.pathname!=="/Login") {
      navigate("Login", { replace: true });
    }
  }, [location]);//eslint-disable-line

  return (
    <>
      <Navbar />
      <Container>{props.children}</Container>
    </>
  );
};
