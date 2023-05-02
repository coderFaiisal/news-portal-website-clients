import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import RightSideNav from "../RightSideNav/RightSideNav";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((e) => console.error(e));
  };

  return (
    <div className="mb-4">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">News Portal</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user?.uid ? (
                <>
                  <p className="text-primary me-2 mb-0">{user?.displayName}</p>
                  {user?.photoURL ? (
                    <Image
                      roundedCircle
                      style={{ height: "40px" }}
                      src={user?.photoURL}
                      alt=""
                    />
                  ) : (
                    <FaUserAlt />
                  )}
                  <Button onClick={handleLogout} className="ms-2">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/register">
                    {" "}
                    <Button className="ms-2">Register</Button>
                  </Link>
                  <Link to="/login">
                    <Button className="ms-2">Login</Button>
                  </Link>
                </>
              )}
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
            <div className="d-lg-none">
              <RightSideNav></RightSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
