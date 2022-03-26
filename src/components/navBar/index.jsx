import React, { useContext } from "react";
import mainLogo from "../../img/logo.png";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { RegisterContext } from "../../context/registration";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {
  const registerContext = useContext(RegisterContext);

  const navItems = [
    { title: "home", link: "/", onClick: () => {}, show: true },
    { title: "blog", link: "/blog", onClick: () => {}, show: true },
    {
      title: "projects",
      link: "/Projects",
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
  ];

  const activeStyle = {
    color: "#52a6c9",
    fontWeight: "bolder",
  };

  return (
    <>
      <Navbar bg="dark" sticky="top">
        <Container>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="" className="text-light font-weight-light">
              <FontAwesomeIcon icon={faPhone} className="blue-icon" />
              888 666 000
            </Nav.Link>
            <Nav.Link href="" className="text-light font-weight-light">
              <FontAwesomeIcon icon={faMapLocationDot} className="blue-icon" />2
              Queen Street, USA
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="light" expand="lg" sticky="top" className="shadow">
        <Container>
          <Navbar.Brand href="/">
            <img src={mainLogo} alt="logo" width="100" height="50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navItems.map(
                (item) =>
                  item.show && (
                    <NavLink
                      to={item.link}
                      key={item.title}
                      className="nav-link"
                      onClick={item.onClick}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      {item.title}
                    </NavLink>
                  )
              )}
            </Nav>
            <Nav>
              {registerContext.loggedIn ? (
                <NavLink
                  to="/logout"
                  key="Logout"
                  className="nav-link"
                  onClick={() => {
                    registerContext.logout();
                  }}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/Login" key="Login" className="nav-link">
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
