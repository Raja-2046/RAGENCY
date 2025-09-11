import React from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-scroll";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from '../JS/userSlice/userSlice';

const itemStyle = {
  textDecoration:"none",
  color: '#374151',
  textTransform: "Uppercase",
  fontSize: '1.2em',
}

function Navbarr() {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogout = () => {
      dispatch(logout());
      navigate('/');
    }

    const isHome = location.pathname === "/";
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderBottom: "1px solid rgba(229, 231, 235, 0.2)",
        zIndex: 1050,
      }}
    >
      <Container>
        <Navbar.Brand href="#">
          <RouterLink to="/" style={itemStyle}>
            <img src="logo.png" width={150} />
          </RouterLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {isHome && (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="home" smooth={true} duration={100} offset={-80}>
                <RouterLink to="/" style={itemStyle}>
                  Home
                </RouterLink>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="about" smooth={true} duration={100} offset={-80}>
                <RouterLink to="/" style={itemStyle}>
                  About
                </RouterLink>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="services" smooth={true} duration={100} offset={-80}>
                <RouterLink to="/" style={itemStyle}>
                  Services
                </RouterLink>
              </Link>
            </Nav.Link>
            {!user ? (
              <>
                <Nav.Link href="#action2">
                  <RouterLink to="/register" style={itemStyle}>
                    Register
                  </RouterLink>
                </Nav.Link>
                <Nav.Link href="#action2">
                  <RouterLink to="/login" style={itemStyle}>
                    Login
                  </RouterLink>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="#action2">
                  <RouterLink to="/Profil" style={itemStyle}>
                    Profil
                  </RouterLink>
                </Nav.Link>
              </>
            )}
            <Nav.Link>
              <Link to="contact" smooth={true} duration={100} offset={-80}>
                <RouterLink to="/" style={itemStyle}>
                  Contact
                </RouterLink>
              </Link>
            </Nav.Link>
          </Nav>
          <Link to="contact" smooth={true} duration={100} offset={-80}>
            <Button
              variant="primary"
              style={{
                backgroundColor: "#dc2626",
                borderColor: "#dc2626",
                fontWeight: "100",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b91c1c";
                e.currentTarget.style.borderColor = "#b91c1c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#dc2626";
                e.currentTarget.style.borderColor = "#dc2626";
              }}
            >
              Get Started
            </Button>
          </Link>
          {user && (
            <div className="d-flex justify-content-between m-2">
              <h4
                style={itemStyle}
                className="m-1"
              >{`${user?.name} ${user?.lastname}`}</h4>
              <FaSignOutAlt className="m-2" onClick={handleLogout} />
            </div>
          )}
        </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  );
}

export default Navbarr