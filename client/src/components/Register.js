import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../JS/userSlice/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Register() {
  const [register, setregister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(register));
    navigate("/profil");
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ marginTop: "80px"}}
    >
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card className="shadow-lg rounded-4 border-0">
            <Card.Body className="p-5 d-flex flex-column justify-content-center">
              <h2 className="text-center fw-bold mb-4 text-danger">Create Account</h2>
              <p className="text-center text-muted mb-4">
                Join our marketing agency community ✨
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="John"
                    value={register.name}
                    onChange={(e) => setregister({ ...register, name: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Doe"
                    value={register.lastname}
                    onChange={(e) => setregister({ ...register, lastname: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={register.email}
                    onChange={(e) => setregister({ ...register, email: e.target.value })}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="********"
                    value={register.password}
                    onChange={(e) => setregister({ ...register, password: e.target.value })}
                    required
                  />
                </Form.Group>

                <Button
                  type="submit"
                  variant="danger"
                  className="w-100 rounded-pill fw-bold"
                >
                  Register
                </Button>
              </Form>

              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="fw-bold text-danger">
                  Sign in
                </Link>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
