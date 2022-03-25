import React, { useContext } from "react";
import mainLogo from "../../img/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RegisterContext } from "../../context/registration";

const NavBar = (props) => {
  const registerContext = useContext(RegisterContext);

  const navItems = [
    { title: "home", link: "/", onClick: () => {}, show: true },
    { title: "blog", link: "/blog", onClick: () => {}, show: true },
    {
      title: "portfolio",
      link: "/portfolio",
      onClick: () => {},
      show: registerContext.loggedIn,
    },
    {
      title: "pages",
      link: "/pages",
      onClick: () => {},
      show: registerContext.loggedIn,
    },
    {
      title: "features",
      link: "/features",
      onClick: () => {},
      show: true,
    },
    {
      title: "Contact",
      link: "/Contact",
      onClick: () => {},
      show: true,
    },
    {
      title: "Login",
      link: "/Login",
      onClick: () => {},
      show: !registerContext.loggedIn,
    },
    {
      title: "Logout",
      link: "/",
      onClick: () => {registerContext.logout()},
      show: registerContext.loggedIn,
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
            {navItems.map(
              (item) =>(
                item.show && (
                  <NavLink to={item.link} key={item.title} className="nav-link" onClick={item.onClick}>
                    {item.title}
                  </NavLink>
                ))
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
