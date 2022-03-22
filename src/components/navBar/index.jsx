import React from "react";
import mainLogo from "../../img/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const navItems = [
    { title: "home", link: "/", onClick: () => {} },
    { title: "blog", link: "/blog", onClick: () => {} },
    {
      title: "portfolio",
      link: "/portfolio",
      onClick: () => {},
    },
    {
      title: "pages",
      link: "/pages",
      onClick: () => {},
    },
    {
      title: "features",
      link: "/features",
      onClick: () => {},
    },
    {
      title: "Contact",
      link: "/Contact",
      onClick: () => {},
    },
    {
      title: "Login",
      link: "/",
      onClick: () => {},
    },
    {
      title: "SignUp",
      link: "/SignUp",
      onClick: () => {},
    },

  ];
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img src={mainLogo} alt="logo" width="100" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.title}
                className="nav-link"
              >
                {item.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
