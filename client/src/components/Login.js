import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userlogin } from "../JS/userSlice/userSlice";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      dispatch(userlogin(login));
      navigate("/profil");
    }, 1000);
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card className="shadow-lg rounded-4 border-0">
            <Card.Body className="p-5">
              <h6 className="text-center text-muted mb-4">
                Welcome back! Please login to continue 🚀
              </h6>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={login.email}
                    onChange={(e) => setlogin({ ...login, email: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={login.password}
                    onChange={(e) => setlogin({ ...login, password: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember me" />
                  <Link to="/forgot-password" className="small text-danger fw-bold">
                    Forgot password?
                  </Link>
                </Form.Group>

                <Button
                  type="submit"
                  variant="danger"
                  className="w-100 rounded-pill fw-bold"
                >
                  Login
                </Button>
              </Form>

              <p className="text-center mt-4">
                Don’t have an account?{" "}
                <Link to="/register" className="fw-bold text-danger">
                  Register now
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
